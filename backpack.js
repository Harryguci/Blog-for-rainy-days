class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLength_L,
    strapLength_R,
    lidOpen,
    D1
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = { left: strapLength_L, right: strapLength_R };
    this.lidOpen = lidOpen;
    this.B_date = new Date(D1);
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack("Lid status changed.");
  }
  newStrapLength(lengthLeft, lengthRight) {
    // this.strapLength;
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;

    updateBackpack("Strap lengths updated.");
  }
  setDate(D1) {
    this.B_date = D1;
    // updateBackpack('Changed this date');
  }
  backpackAge() {
    let now = Date.now();
    //console.log(now + ' - ' + this.B_date.getTime());
    let elapsed = now - this.B_date;
    console.log(elapsed);
    let day = 24 * 1000 * 3600;
    let month = day * 30;
    let year = day * 365;
    let age_y = Math.floor(elapsed / year);
    let age_m = Math.floor(elapsed / month);
    let age_d = Math.floor(elapsed / day);

    return `
    <ul>
      <li>Day : ${age_d}</li>
      <li>Month : ${age_m}</li>
      <li>Year : ${age_y}</li>
    </ul>
    `;
  }

  display() {
    let text = "";
    text += `
    <h1>Backpack 1:</h1>
    <ul>
    <li>Name : ${this.name}</li>
    <li>Name : ${this.volume}</li>
    <li>Name : ${this.color}</li>
    <li>Name : ${this.pocketNum}</li>
    <li>Strap : 
      <ul>
      <li>Left : ${this.strapLength.left}</li>
      <li>Right : ${this.strapLength.right}</li>
      </ul>
    </li>
    <li>Open : ${this.lidOpen}</li>
    <li>Date : ${this.backpackAge()}</li>
    </ul>
    `;
    return text;
  };
}

export default Backpack;
