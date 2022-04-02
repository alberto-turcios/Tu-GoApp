import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
@Directive({
    selector: '[ifUndefinedChanges]'
})
export class IfUndefinedChangesDirective {
    private currentValue: any;
    private hasView = false;

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) { }

    @Input() set ifUndefinedChanges(val: any) {
        if (!this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
            this.currentValue = val;
        } else if (val !== this.currentValue && (!this.currentValue || !val)) {
            this.viewContainer.clear();
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.currentValue = val;
        }
    }
}
