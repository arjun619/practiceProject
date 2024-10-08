import winston from "winston";

export class LoggerService {
    private logger;
    constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.colorize()
            ),
            transports: [
                new winston.transports.Console()
            ]
        })
    }
   public logInfo(info : string): void {
        this.logger.info(info);
    }
    public logError(err : string): void {
        this.logger.error(err);
    }
}