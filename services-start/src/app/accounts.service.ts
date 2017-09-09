import { LoggingService } from "./logging.service";
import { Injectable } from '@angular/core';

// Injectable decorator is used on service class which accpets other services to be injected.
@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    
      constructor(private loggingService: LoggingService){}

      onAccountAdded(name: string, status: string) {
        this.accounts.push({name: name, status : status});
        this.loggingService.logStatusChange(status);
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(status);
      }
}