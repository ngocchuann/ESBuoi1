let listtotal = (...menunumbr) => {
    let tong = 0;
    let tb = 0;
    let conut = 0;
    menunumbr.map((number) => { 
        tong += number;
        conut++;
        tb = tong/conut;
     })
     return tb.toFixed(2);
}
let total = () => {
    let toan = Number(document.getElementById("inToan").value);
    let ly = Number(document.getElementById("inLy").value);
    let hoa = Number(document.getElementById("inHoa").value);
    let tb = listtotal(toan, ly, hoa);
    document.getElementById("tbKhoi1").innerHTML = tb;
}
document.getElementById("btnKhoi1").onclick =total;
let total2 = () => {
    let van = Number(document.getElementById("inVan").value);
    let su = Number(document.getElementById("inSu").value);
    let dia = Number(document.getElementById("inDia").value);
    let english = Number(document.getElementById("inEnglish").value);
    let tb = listtotal(van, su, dia, english);
    document.getElementById("tbKhoi2").innerHTML = tb;
}
document.getElementById("btnKhoi2").onclick = total2;
