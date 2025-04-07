import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { stripHtml } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import {
  CheckIcon,
  ChevronDownIcon,
  Loader2Icon,
  SlidersVerticalIcon,
  SparklesIcon,
  TrashIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const PromptNodeView = ({ deleteNode }: NodeViewProps) => {
  const { editor } = useEditorStore();

  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [currentContent, setCurrentContent] = useState("");

  const handleInsert = () => {
    editor
      ?.chain()
      .focus()
      .insertContentAt(editor?.state.selection.$anchor.pos, currentContent, {
        updateSelection: true,
        parseOptions: {
          preserveWhitespace: false,
        },
      })
      .run();

    deleteNode();
    editor?.commands.focus();
  };

  const handleGenerateText = async (
    action: "initial" | "continue" | "lengthen" | "shorten"
  ) => {
    setIsGenerating(true);

    const plainText = stripHtml(currentContent);

    setCurrentContent("");

    fetch(`/api/openai`, {
      method: "POST",
      body: JSON.stringify({
        prompt,
        action: action === "initial" ? undefined : action,
        currentContent: plainText,
      }),
    })
      .then(async (response) => {
        const { output_text: outputText } = await response.json();

        // console.log("OUTPUT: ", outputText);

        setCurrentContent(outputText);
        setIsGenerating(false);
      })
      .catch(() => {
        toast.error("Something went wrong.");
        setIsGenerating(false);
      });
  };

  return (
    <NodeViewWrapper className="relative p-2 w-full bg-white rounded-lg border border-neutral-200 my-4 print:hidden">
      <XIcon
        onClick={() => deleteNode()}
        className="absolute right-2 top-2 size-4 cursor-pointer"
      />
      <div className="flex flex-col p-1">
        {currentContent && (
          <div
            contentEditable={false}
            className="flex flex-row items-center justify-between gap-1"
          >
            <label className="text-black/80 dark:text-white/80 text-xs font-medium mb-2 ml-1.5">
              Preview
            </label>
          </div>
        )}
        {currentContent && (
          <div
            contentEditable={false}
            className="bg-white border-neutral-100 text-black text-base max-h-[14rem] mb-4 ml-2.5 overflow-y-auto px-4 relative"
            dangerouslySetInnerHTML={{ __html: currentContent }}
          />
        )}
        <div
          contentEditable={false}
          className="flex flex-row items-center justify-between gap-1"
        >
          <label className="text-black/80 dark:text-white/80 text-xs font-medium mb-2 ml-1.5">
            Prompt
          </label>
        </div>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask AI..."
          className="bg-black/5 border-0 rounded-lg caret-black block text-black text-sm font-medium h-[4.5rem] px-2 py-1 w-full hover:bg-black/10 focus:bg-transparent active:bg-transparent focus:outline focus:outline-black active:outline active:outline-black mb-2"
          required
        />
        <div
          contentEditable={false}
          className="flex flex-row items-center justify-between gap-1"
        >
          <div className="flex justify-between w-auto gap-1">
            {currentContent && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex group items-center justify-center border border-transparent gap-2 text-sm font-semibold rounded-md disabled:opacity-50 whitespace-nowrap bg-neutral-50 text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200 py-2 px-3">
                    <SlidersVerticalIcon className="size-4" />
                    Adjust
                    <ChevronDownIcon className="size-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => handleGenerateText("continue")}
                  >
                    Continue writing
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleGenerateText("lengthen")}
                  >
                    Make longer
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleGenerateText("shorten")}
                  >
                    Make shorter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <div className="flex justify-between w-auto gap-1">
            {currentContent && (
              <>
                <button
                  onClick={() => deleteNode()}
                  className="flex group items-center justify-center border gap-2 text-sm font-semibold rounded-md disabled:opacity-50 whitespace-nowrap bg-transparent border-transparent active:bg-black/10 active:text-neutral-800 py-2 px-3 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                >
                  <TrashIcon className="size-4" />
                  Discard
                </button>
                <button
                  onClick={handleInsert}
                  className="flex group items-center justify-center border gap-2 text-sm font-semibold rounded-md disabled:opacity-50 whitespace-nowrap bg-transparent border-transparent text-neutral-500 hover:bg-black/5 hover:text-neutral-700 active:bg-black/10 active:text-neutral-800 py-2 px-3"
                >
                  <CheckIcon className="size-4" />
                  Insert
                </button>
              </>
            )}

            <button
              disabled={isGenerating}
              onClick={() => handleGenerateText("initial")}
              className="flex group items-center justify-center border gap-2 text-sm font-semibold rounded-md disabled:opacity-50 whitespace-nowrap text-white bg-black border-black hover:bg-neutral-800 active:bg-neutral-900 py-2 px-3"
            >
              {!isGenerating && <SparklesIcon className="size-4" />}
              {isGenerating && <Loader2Icon className="size-4 animate-spin" />}
              {!currentContent && !isGenerating && <span>Generate text</span>}
              {!currentContent && isGenerating && <span>Generating...</span>}
              {currentContent && <span>Regenerate</span>}
            </button>
          </div>
        </div>
      </div>
    </NodeViewWrapper>
  );
};
