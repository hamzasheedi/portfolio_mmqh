import {z} from "zod";
const schema=z.object({APP_ENV:z.enum(["local","preview","production"]).default("local"),CONTENT_ADAPTER:z.enum(["local","production"]).default("local"),INQUIRY_ADAPTER:z.enum(["local","production"]).default("local"),UPLOAD_ADAPTER:z.enum(["local","production"]).default("local"),CALENDAR_ADAPTER:z.enum(["local","production"]).default("local"),TELEMETRY_ADAPTER:z.enum(["local","production"]).default("local")});
export const env=schema.parse(process.env);
