var tc = require('./textcell.js');
var TextCell = tc.TextCell;

// RTextCell ECMA6

class RTextCell extends TextCell {
    constructor(text) {
        super(text);
    }
    draw(width, height) {
        var result = [];
        for (var i = 0; i < height; i++) {
            var line = this.text[i] || "";
            result.push(" ".repeat(width - line.length) + line);
        }
        return result;
    };
}

//End RTextCell

module.exports = {
    RTextCell: RTextCell
};
