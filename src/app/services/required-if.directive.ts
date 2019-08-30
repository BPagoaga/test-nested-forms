import { Directive, Input, SimpleChanges } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
  selector: "[requiredIf]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RequiredIfValidator,
      multi: true
    }
  ]
})
export class RequiredIfValidator implements Validator {
  @Input("requiredIf")
  requiredIf: boolean;

  validate(c: AbstractControl): { [key: string]: any } | null {
    let value = c.value;
    if (
      (value == null || value == undefined || value == "") &&
      this.requiredIf
    ) {
      return {
        requiredIf: { condition: this.requiredIf }
      };
    }
    return null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  private _onChange: () => void;

  ngOnChanges(changes: SimpleChanges): void {
    if ("requiredIf" in changes) {
      if (this._onChange) this._onChange();
    }
  }
}
