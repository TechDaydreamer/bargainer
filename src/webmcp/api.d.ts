export interface ModelContextTool {
  name: string;
  title?: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  execute: (
    input: Record<string, any>,
    options: { signal: AbortSignal },
  ) => unknown | Promise<unknown>;
  annotations?: { readOnlyHint?: boolean; untrustedContentHint?: boolean };
}
export interface ModelContext {
  registerTool(tool: ModelContextTool, options?: { signal?: AbortSignal }): Promise<void>;
  getTools(options?: { fromOrigins?: string[] }): Promise<unknown[]>;
  executeTool(
    tool: unknown,
    input: object | string,
    options?: { signal?: AbortSignal },
  ): Promise<string>;
  addEventListener(type: 'toolchange', listener: () => void): void;
}
declare global {
  interface Document {
    readonly modelContext?: ModelContext;
  }
}
export {};
