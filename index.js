const Select = (items) => {
    let returningSelectedOneForJs = [];
    items.forEach((str, ind)  => {
        returningSelectedOneForJs[ind] = document.querySelector(str);
    });
    return returningSelectedOneForJs;
}

const SelectAll = (items) => {
    let returningSelectedAllForJs = [];
    items.forEach((lst, ind)  => {
        returningSelectedAllForJs[ind] = document.querySelectorAll(lst);
    });
    return returningSelectedAllForJs;
}





module.exports = {
    Select: Select,
    SelectAll : SelectAll
}

// const [a, b, c] = Select(['p', '.classic', '#ids'])
// const [x, y, z] = SelectAll(['p', '.classic', '#ids'])
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(x)
// console.log(y)
// console.log(z)