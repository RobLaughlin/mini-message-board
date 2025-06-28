export const messages: Message[] = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        colspan: "message-sm",
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        colspan: "message-md",
    },
    {
        text: "Esse adipisicing ut qui labore non qui dolore elit anim esse pariatur. Dolor laboris dolore anim duis est magna quis fugiat aliquip voluptate dolore tempor occaecat. Anim esse aliquip id laborum nulla consequat ut pariatur est culpa. Non ex esse ad commodo ipsum eiusmod id tempor. Velit ex laborum pariatur pariatur duis ipsum incididunt incididunt reprehenderit. Nostrud amet esse ex dolor exercitation. Pariatur cillum voluptate aliqua nulla qui do anim reprehenderit nulla adipisicing. Mollit elit Lorem et aliqua reprehenderit qui commodo laboris labore et. Culpa nostrud laborum consectetur velit occaecat laboris veniam magna laborum nisi culpa. Esse esse veniam quis sunt exercitation est dolore dolor irure anim consequat incididunt. Excepteur reprehenderit cillum est id officia. ",
        user: "SUPERLONGUSERNAME",
        added: new Date(),
        colspan: "message-lg",
    },
];

export type Message = {
    text: string;
    user: string;
    added: Date;
    colspan: "message-sm" | "message-md" | "message-lg";
};
