import { Response, Request } from "express";
export declare const createTask: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getTasks: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getTaskById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateTask: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteTask: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=controller.d.ts.map