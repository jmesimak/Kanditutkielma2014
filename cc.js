center = { cost: 5 };
bottom = { cost: 10 };

function g(s) {

    return Math.min(

}

function compCost(s1, sa, sb) {

    if (s1.diagonals.indexOf(sa) !== -1) {
        s1 = sb;
        s2 = sa;
    } else {
        s1 = sa;
        s2 = sb;
    }

    c = center.cost
    b = bottom.cost

    if (Math.min(c,b) === Number.MAX_VALUE) {
        vs = Number.MAX_VALUE;
    } else if (g(s1) <= g(s2)) {
        vs = Math.min(c,b) + g(s1);
    } else {
        f = g(s1) - g(s2);
        if (f <= b) {
            if (c <= f) {
                vs = c*Math.sqrt(2)+g(s2);
            } else {
                y = Math.min(f/(Math.sqrt(Math.pow(c, 2) - Math.pow(f, 2))), 1);
                vs = c*Math.sqrt(1+Math.pow(y, 2))+f(1-y)+g(s2);
            }
        } else {
            if (c <= b) {
                vs = c*Math.sqrt(2)+g(s2);
            } else {
                x = 1 - Math.min(b/(Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2))), 1);
                vs = c*Math.sqrt(1+Math.pow(1-x, 2)+bx+g(s2));
            }
        }
    }
    return vs;
}

helper = {};
node = {diagonals: [helper]};
