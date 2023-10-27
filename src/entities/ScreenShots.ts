import { ScreenShot } from "./ScreenShot";

export interface ScreenShots{
    count: number;
    next: string;
    previous: string;
    results: ScreenShot[];
}