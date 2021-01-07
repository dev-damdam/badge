export default class BadgeSelectInfo {
    static arrSelectInfo = [];

    static nTotalSelectNumber = 0;

    static addSelectObject(_idx, _selectNum, _selectState) {
        this.arrSelectInfo.push({
            idx: _idx,
            select_number: _selectNum,
            select_state: _selectState,
        });
    }

    static selectItem(_idx) {
        //선택 함수
        for (let i = 0; i < this.arrSelectInfo.length; i++) {
            if (this.arrSelectInfo[i].idx === _idx) {
                this.nTotalSelectNumber++;

                this.arrSelectInfo[i].select_number += this.nTotalSelectNumber;
                this.arrSelectInfo[i].select_state = true;
            }
        }
    }

    static unSelectItem(_idx) {
        //선택 해제 함수
        this.arrSelectInfo = this.arrSelectInfo.filter((item) => item.idx != _idx);
        this.nTotalSelectNumber--;
        this.sortItems();
    }

    static sortItems() {
        //선택 해제시 select number 재정렬하는 함수
        let count = 0;
        for (let i = 0; i < this.arrSelectInfo.length; i++) {
            count++;
            if (this.arrSelectInfo[i].select_number !== count)
                this.arrSelectInfo[i].select_number--;
        }
    }

    static getSeletedInfo(_idx) {
        let selectInfo = undefined;
        for (let i = 0; i < this.arrSelectInfo.length; i++) {
            if (this.arrSelectInfo[i].idx === _idx) {
                selectInfo = this.arrSelectInfo[i];
            }
        }
        return selectInfo;
    }
}