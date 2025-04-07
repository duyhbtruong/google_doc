import { PromptNodeView } from "@/app/documents/[documentId]/prompt-node-view";
import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    PromptNode: {
      createPromptNode: () => ReturnType;
    };
  }
}

export const PromptNode = Node.create({
  name: "promptNode",

  group: "block",

  content: "inline*",

  ephemeral: true,

  parseHTML() {
    return [
      {
        tag: "promptNode",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes), 0];
  },

  addCommands() {
    return {
      createPromptNode:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            content: [],
          });
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(PromptNodeView);
  },
});
