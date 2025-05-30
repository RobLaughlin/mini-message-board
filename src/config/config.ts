import dotenv from "dotenv";
dotenv.config();

interface Config {
    readonly PORT: number;
}

const CONFIG: Config = {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 8080,
};

export type { Config };
export default CONFIG;
