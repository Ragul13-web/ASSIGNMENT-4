    function add() {
        const v1 = document.getElementsByTagName("input")[0].value;
        const v2 = document.getElementsByTagName("input")[1].value;
        const v3 = +v1 + +v2;
        document.getElementsByTagName("input")[2].value = v3;
    }