// export class DropDownList {
//   constructor(el1, el2) {
//     this.startingPoints = document.querySelectorAll(el1);
//     this.dropDownList = document.querySelectorAll(el2);
//     this.flg = true;
//   }

//   showList() {
//     for (let i = 0; i < this.startingPoints.length; i++) {
//       let pairedId = document.getElementById(this.startingPoints[i].getAttribute('aria-controls'));

//       this.startingPoints[i].addEventListener('click', (e) => {
//         e.preventDefault();

//         console.log(this.flg);

//         if (this.flg) {

//           this.startingPoints[i].setAttribute('aria-pressed', 'true');
//           pairedId.setAttribute('aria-hidden', 'false');
//           pairedId.setAttribute('tabindex', '0');
//           pairedId.focus();

//           for (let i = 0; i < this.dropDownList.length; i++) {
//             if (this.dropDownList[i] !== pairedId) {
//               this.startingPoints[i].setAttribute('aria-pressed', 'false');
//               pairedId.setAttribute('aria-hidden', 'false');
//               pairedId.setAttribute('tabindex', '0');
//               pairedId.focus();
//               this.dropDownList[i].setAttribute('aria-hidden', 'true');
//             }
//           }
//           this.flg = false;
//         }
//         //  else if (this.flg === false) {

//         //   this.startingPoints[i].setAttribute('aria-pressed', 'false');
//         //   pairedId.setAttribute('aria-hidden', 'true');
//         //   pairedId.removeAttribute('tabindex', '0');
//         //   pairedId.blur();

//         //   this.flg = true;
//         // }
//       });

//       document.addEventListener('click', (e) => {
//         if(e.target.closest('.js-dropdown-list') === null) {
//           this.startingPoints[i].setAttribute('aria-pressed', 'false');
//           this.dropDownList[i].setAttribute('aria-hidden', 'true');
//         }
//         if (this.flg) {
//           this.flg = true;
//         } else {
//           this.flg = false;
//         }
//         console.log(this.flg);
//       });
//     }
//   }
// }