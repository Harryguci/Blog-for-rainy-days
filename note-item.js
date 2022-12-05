class Note {
  constructor(name, title, type, date, content) {
    this.name = name;
    this.title = title;
    this.type = type;
    this.date = date;
    this.content = content;
  }
  display() {
    let D1 = new Date(this.date);
    let h1 = D1.getHours();
    let mi1 = D1.getMinutes();
    let y1 = D1.getFullYear();
    let m1 = D1.getMonth();
    let d1 = D1.getDate();
    if (d1 < 10) d1 = '0' + d1;
    if (m1 < 10) m1 = '0' + m1;
    if (h1 < 10) h1 = '0' + h1;
    if (mi1 < 10) mi1 = '0' + mi1;
    
    return `
    <div class="col-md-4 card-item">
    <div class="note-container">
    <div class="note__header">
    <h3>${this.title}</h3>
    <span>${h1}:${mi1}<span class="mx-1"></span>${d1}/${m1}/${y1}</span>
    </div>
    <div class="note__content">
    <p>${this.content}</p>
    </div>
    </div>
    </div>
    `;
  }
}

export default Note;
/*
<div class="col-md-4 card-item">
                        <div class="note-container">
                            <div class="note__header">
                                <h3>Title</h3>
                                <span>01/01/2022</span>
                            </div>
                            <div class="note__content">
                                <p>Some content</p>
                            </div>
                        </div>
                    </div>
*/
