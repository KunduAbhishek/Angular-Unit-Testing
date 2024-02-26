import { LoggerService } from "./logger.service";

describe('LoggerService',()=>{
    let loggerService: LoggerService;
    beforeEach(()=>{
        loggerService = new LoggerService();
    });

    it('should be empty at starting',() =>{
        expect(loggerService.messages.length).toBe(0);
    })

    it('should be have a value when message in logged',() =>{
        loggerService.log('message');
        expect(loggerService.messages.length).toBe(1);
    })

    it('should clear the messages',() =>{
        loggerService.log('message');
        loggerService.clear();
        expect(loggerService.messages.length).toBe(0);
    })
})