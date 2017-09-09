import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // Here we are telling angular to provide the instance of LoggingSerice to us. By this way angular identifies
  //that angular needs to inject loggingservice. But how angular will craete it? For that we need to add Providers property in Component decorator.
  constructor(private loggingService: LoggingService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
   this.loggingService.logStatusChange(accountStatus);
  }
}
