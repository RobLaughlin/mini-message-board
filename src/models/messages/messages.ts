import * as z from "zod/v4";

export const MAX_MESSAGE_LENGTH = 1000;
export const MAX_USERNAME_LENGTH = 30;
export const MAX_TITLE_LENGTH = 50;
export const MESSAGE_COLSPAN_OPTIONS = [
    "message-sm",
    "message-md",
    "message-lg",
];

export const messages: Message[] = [
    {
        message: "Hi there!",
        title: "test",
        name: "Amando",
        added: new Date(),
        colspan: "message-sm",
    },
    {
        message: "Hello World!",
        title: "test2",
        name: "Charles",
        added: new Date(),
        colspan: "message-md",
    },
    {
        message:
            "Esse adipisicing ut qui labore non qui dolore elit anim esse pariatur. Dolor laboris dolore anim duis est magna quis fugiat aliquip voluptate dolore tempor occaecat. Anim esse aliquip id laborum nulla consequat ut pariatur est culpa. Non ex esse ad commodo ipsum eiusmod id tempor. Velit ex laborum pariatur pariatur duis ipsum incididunt incididunt reprehenderit. Nostrud amet esse ex dolor exercitation. Pariatur cillum voluptate aliqua nulla qui do anim reprehenderit nulla adipisicing. Mollit elit Lorem et aliqua reprehenderit qui commodo laboris labore et. Culpa nostrud laborum consectetur velit occaecat laboris veniam magna laborum nisi culpa. Esse esse veniam quis sunt exercitation est dolore dolor irure anim consequat incididunt. Excepteur reprehenderit cillum est id officia. ",
        title: "test3",
        name: "SUPERLONGUSERNAME",
        added: new Date(),
        colspan: "message-lg",
    },
];

function getMessageBoxSize(textLength: number): string {
    const ratio = textLength / MAX_MESSAGE_LENGTH;
    const i = Math.min(2, Math.ceil(ratio * 3) - 1);

    return MESSAGE_COLSPAN_OPTIONS[i];
}

export const NEW_MESSAGE_SCHEMA = z
    .object({
        message: z.string().nonempty().max(MAX_MESSAGE_LENGTH).nonoptional(),
        name: z.string().nonempty().max(MAX_USERNAME_LENGTH).nonoptional(),
        title: z.string().nonempty().max(MAX_TITLE_LENGTH).nonoptional(),
        added: z.date().optional().default(new Date()),
        colspan: z
            .union(MESSAGE_COLSPAN_OPTIONS.map((option) => z.literal(option)))
            .optional()
            .default(""),
    })
    .transform((message) => {
        if (message.colspan === "") {
            message.colspan = getMessageBoxSize(message.message.length);
        }
        return message;
    });

export type Message = z.infer<typeof NEW_MESSAGE_SCHEMA>;
