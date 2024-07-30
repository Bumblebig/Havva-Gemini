import React from 'react';
import Question from './Question';

const faqsData = [
  {
    question: 'How do I verify my email?',
    answer: `Click the link in the verification email from verify@codepen.io (be sure to check your spam folder or other email tabs if it's not in your inbox).
            Or, send an email with the subject "Verify" to verify@codepen.io from the email address you use for your CodePen account.`,
    link: 'https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2',
    linkText: 'How to Verify Email Docs',
  },
  {
    question: 'My Pen loads infinitely or crashes the browser.',
    answer: `It's likely an infinite loop in JavaScript that we could not catch. To fix, add ?turn_off_js=true to the end of the URL (on any page, like the Pen or Project editor, your Profile page, or the Dashboard) to temporarily turn off JavaScript. When you're ready to run the JavaScript again, remove ?turn_off_js=true and refresh the page.`,
    link: 'https://blog.codepen.io/documentation/features/turn-off-javascript-in-previews/',
    linkText: 'How to Disable JavaScript Docs',
  },
  {
    question: 'How do I contact the creator of a Pen?',
    answer: `You can leave a comment on any public Pen. Click the "Comments" link in the Pen editor view, or visit the Details page.`,
    link: 'https://blog.codepen.io/documentation/faq/how-do-i-contact-the-creator-of-a-pen/',
    linkText: 'How to Contact Creator of a Pen Docs',
  },
  {
    question: 'What version of [library] does CodePen use?',
    answer: `We have our current list of library versions`,
    link: 'https://codepen.io/versions',
    linkText: 'here',
  },
  {
    question: 'What are forks?',
    answer: `A fork is a complete copy of a Pen or Project that you can save to your own account and modify. Your forked copy comes with everything the original author wrote, including all of the code and any dependencies.`,
    link: 'https://blog.codepen.io/documentation/features/forks/',
    linkText: 'Learn More About Forks',
  },
];

const FAQs = () => (
  <div className="wrapper align-middle justify-center mx-auto">
    {faqsData.map((faq, index) => (
      <Question
        key={index}
        question={faq.question}
        answer={faq.answer}
        link={faq.link}
        linkText={faq.linkText}
      />
    ))}
  </div>
);

export default FAQs;
