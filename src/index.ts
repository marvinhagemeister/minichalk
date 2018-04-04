const forced = process && process.env && process.env.FORCE_COLOR !== undefined;
export const supportsColor =
  forced ||
  ((process &&
    process.stdout &&
    (!process.stdout.isTTY && process.env.VSCODE_PID)) ||
    (process.stdout && process.stdout.isTTY));

export const fn = (open: number, text: string, close: number) =>
  supportsColor ? `\u001B[${open}m${text}\u001B[${close}m` : text;

// Foreground
// Normal colors
export const black = (text: string) => fn(30, text, 39);
export const red = (text: string) => fn(31, text, 39);
export const green = (text: string) => fn(32, text, 39);
export const yellow = (text: string) => fn(33, text, 39);
export const blue = (text: string) => fn(34, text, 39);
export const magenta = (text: string) => fn(35, text, 39);
export const cyan = (text: string) => fn(36, text, 39);
export const white = (text: string) => fn(37, text, 39);
export const gray = (text: string) => fn(90, text, 39);

// Bright colors
export const redBright = (text: string) => fn(91, text, 39);
export const greenBright = (text: string) => fn(92, text, 39);
export const yellowBright = (text: string) => fn(93, text, 39);
export const blueBright = (text: string) => fn(94, text, 39);
export const magentaBright = (text: string) => fn(95, text, 39);
export const cyanBright = (text: string) => fn(96, text, 39);
export const whiteBright = (text: string) => fn(97, text, 39);

// Background
// Normal colors
export const bgBlack = (text: string) => fn(40, text, 49);
export const bgRed = (text: string) => fn(41, text, 49);
export const bgGreen = (text: string) => fn(42, text, 49);
export const bgYellow = (text: string) => fn(43, text, 49);
export const bgBlue = (text: string) => fn(44, text, 49);
export const bgMagenta = (text: string) => fn(45, text, 49);
export const bgCyan = (text: string) => fn(46, text, 49);
export const bgWhite = (text: string) => fn(47, text, 49);

// Bright colors
export const bgBlackBright = (text: string) => fn(100, text, 49);
export const bgRedBright = (text: string) => fn(101, text, 49);
export const bgGreenBright = (text: string) => fn(102, text, 49);
export const bgYellowBright = (text: string) => fn(103, text, 49);
export const bgBlueBright = (text: string) => fn(104, text, 49);
export const bgMagentaBright = (text: string) => fn(105, text, 49);
export const bgCyanBright = (text: string) => fn(106, text, 49);
export const bgWhiteBright = (text: string) => fn(107, text, 49);
