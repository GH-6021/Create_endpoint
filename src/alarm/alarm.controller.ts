import { Controller, Get } from '@nestjs/common';

@Controller('alarm')
export class AlarmController {
    private alarms = [
        {name: 'ma', hour:13, min:10},
        {name: 'bam', hour:9, min:15},
        {name: 'ca', hour:8, min:30},
    ]

    @Get('/get')
    getAlarms() {
        //console.log(this.alarms);
        return this.alarms;
    }
    
}
