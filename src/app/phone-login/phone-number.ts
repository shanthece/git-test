export class PhoneNumber {
    country: string;
  line: string;
  // format phone numbers as E.164
  get e164() {
    const num = 91 + this.line
    return `+${num}`
  }
}
