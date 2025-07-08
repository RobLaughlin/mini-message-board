import express, { Request, Response, NextFunction } from "express";
import { NEW_MESSAGE_SCHEMA, messages } from "../../models/messages/messages";
import type { Message } from "../../models/messages/messages";

const router = express.Router();

// function getMessageBoxSize(textLength: number) {
//     const ratio = textLength / MAX_MESSAGE_LENGTH;
//     const i = Math.min(2, Math.ceil(ratio * 3) - 1);

//     return MESSAGE_COLSPAN_OPTIONS[i];
// }

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    const parsed = NEW_MESSAGE_SCHEMA.safeParse(req.body);

    // Redirect if we can't parse the message body
    if (parsed.error) {
        res.redirect("/");
        return;
    }

    // Valid message posted
    const message: Message = parsed.data;
    messages.push(message);
    res.redirect("/");
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.redirect("/");
});

export default router;
