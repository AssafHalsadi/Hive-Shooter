import {GAME_CANVAS_HEIGHT, GAME_CANVAS_WIDTH} from "./game-board";

export class Player {

    constructor(private canvas: HTMLCanvasElement) {}

    init(): void {
        const ctx = this.canvas.getContext("2d");
        if (ctx) {
            document.addEventListener("mousemove", event => {
                ctx.clearRect(0, 0, GAME_CANVAS_WIDTH, GAME_CANVAS_HEIGHT);
                this.drawPlayerBase(ctx);
                this.drawPlayerArrow(ctx, event);
            });
        }
    }

    drawPlayerBase(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = BASE_COLOR;
        ctx.beginPath();
        ctx.arc(BASE_CENTER_X, BASE_CENTER_Y, BASE_RADIUS, 0, 2 * Math.PI);
        ctx.fill();
    };

    drawPlayerArrow(ctx: CanvasRenderingContext2D, e: MouseEvent): void {
        var x = e.clientX - (this.canvas.offsetLeft || 0);
        var y = e.clientY - (this.canvas.offsetTop || 0);
        let angle = -Math.atan2(x - BASE_CENTER_X, y - BASE_CENTER_Y) + Math.PI / 2;
        angle = angle < 0 ? (2 * Math.PI) + angle : angle;
        if (angle < ARROW_ANGLE_LOWER_LIMIT) {
            angle = ARROW_ANGLE_LOWER_LIMIT;
        } else if (angle > ARROW_ANGLE_UPPER_LIMIT) {
            angle = ARROW_ANGLE_UPPER_LIMIT;
        }
        const lineX = BASE_CENTER_X + ARROW_LENGTH * Math.cos(angle);
        const lineY = BASE_CENTER_Y + ARROW_LENGTH * Math.sin(angle);
        ctx.strokeStyle = ARROW_COLOR;
        ctx.lineWidth = ARROW_WIDTH;
        ctx.beginPath();
        ctx.moveTo(BASE_CENTER_X, BASE_CENTER_Y);
        ctx.lineTo(lineX, lineY);
        ctx.stroke();
    };
}

const BASE_CENTER_X = 320,
    BASE_CENTER_Y = 470,
    BASE_RADIUS = 60,
    ARROW_LENGTH = 100,
    ARROW_WIDTH = 5,
    ARROW_ANGLE_UPPER_LIMIT = 5.9,
    ARROW_ANGLE_LOWER_LIMIT = 3.5,
    BASE_COLOR = 'black',
    ARROW_COLOR = 'pink';