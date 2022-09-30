export class Study {
    test!: string;
    study_day!: string;
    unit!: string;
    study_id!: string;

    constructor(test: string, study_day: string, unit: string) {
        this.test = test;
        this.study_day = study_day;
        this.unit = unit;
        this.setStudyId();
    }

    setStudyId(): void {
        this.study_id = this.test + this.study_day;
    }
}
