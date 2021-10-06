export class UserDailyActivity {
  userId;
  sessions;
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
