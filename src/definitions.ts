export interface CarplayPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
