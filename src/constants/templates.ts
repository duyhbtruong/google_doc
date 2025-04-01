export const templates = [
  {
    id: "blank",
    label: "Blank document",
    imageUrl: "/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>SOFTWARE DEVELOPMENT PROPOSAL</h1>

      <h2>Prepared for:</h2>
      <p>Client's Name: [Client's Name]</p>
      <p>Client's Company: [Client's Company Name]</p>

      <h2>Prepared by:</h2>
      <p>Your Name: [Your Name]</p>
      <p>Your Company: [Your Company Name]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Name</h1>
      <p>[Date]</p>

      <p>Your name</p>
      <p>Your company</p>
      <p>123 Your street</p>
      <p>Your city, ST12345</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <h1>Your Company</h1>
      <ul>
          <li>123 Main Street</li>
          <li>New York, NY 10001</li>
          <li>(123) 456-7890</li>
          <li>contact@yourcompany.com</li>
      </ul>
      <p><strong>September 20, 2025</strong></p>
      <p>Dear Mr. Student,</p>
      <p>Thank you for your interest in our services.</p>
      <p>We are prepared to provide you with standard product offerings.</p>
      <p>Our franchise combines experience in business industries.</p>
      <p>We look forward to discussing this opportunity further.</p>
      <p>Please contact us if you have any questions.</p>
      <p>Best regards,</p>
      <p><strong>Your Name</strong></p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1 style='color: red;'>Hello,</h1>
      <h2>I'm Your Name</h2>
      <p>123 Main Street</p>
      <p>New York, NY 10001</p>
      <p>(123) 456-7890</p>
      <p>contact@yourwebsite.com</p>
      
      <h3 style='color: red;'>Skills</h3>
      <p>Quick description here. Core competencies and key abilities.</p>
      
      <h3 style='color: red;'>Experience</h3>
      <p><strong>Company Name</strong> - Location, Date</p>
      <ul>
          <li>Key responsibility or achievement</li>
      </ul>
      
      <h3 style='color: red;'>Education</h3>
      <p>University Name - Location, Degree</p>
      
      <h3 style='color: red;'>Awards</h3>
      <p>Notable achievements or recognitions.</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <h1>Your Name</h1>
      <p>123 Main Street</p>
      <p>Your City, ST 12345</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: your.email@example.com</p>
      
      <p>September 20, 2025</p>
      
      <p>Hiring Manager</p>
      <p>Company Name</p>
      <p>123 Company Street</p>
      <p>Company City, ST 12345</p>
      
      <p>Dear Hiring Manager,</p>
      
      <p>_______________________________</p>
      <p>_______________________________</p>
      <p>_______________________________</p>
      <p>_______________________________</p>
      
      <p>Best regards,</p>
      <p>Your Name</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <h1>Your Band</h1>
      <p>September 10, 2024</p>
      <p>Hello fans,</p>
      <p><strong>First, a big THANK YOU!</strong></p>
      <p>Thanks for being such an amazing supporter of Northwest music, culture, and art. Your enthusiasm for our album is truly humbling, and we’re so excited to share four new songs with you at our next show.</p>
      <p>We’re planning a special surprise for our supporters. Stay tuned for an exclusive member event update.</p>
      <p>Can’t wait to see you at our next show!</p>
      <p>Love,<br>Your Band</p>
    `,
  },
];
