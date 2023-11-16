let round = document.querySelector('#firstButton');
let user = ""
while (user === null || user == "" || user.trim() == "" || user.length < 2)
{
	let nullCheck = 0;
	user = prompt("Write your name where more 1 symbol");
		if(user === null)
		{
			alert("Please, write more 1 symbol in your name");
			continue;
		}
		else
		{
			user.split("");
			if(user == "" || user.trim() == "" || user.length < 2)	
				{
				alert("Please, write more 1 symbol in your name");
				}
			else
			{
				let userName = document.getElementById("firstName");
				userName.innerHTML = user;
				break;
			}
		}
	}

let max = 36;
let min = 0;
//let card = Math.floor(Math.random() * (max - min) + min);
let cardValue = new Array(2);
let nominal = new Array(2);
let cardValueCounter = [0, 0];
let counter = new Array(2);
counter[0] = document.getElementById("firstCounter");
counter[1] = document.getElementById("secondCounter");
let cardTable = new Array(2);
cardTable[0] = document.getElementById("firstCard");
cardTable[1] = document.getElementById("secondCard");
let match = 1;
let win = 0;
let userWin = 0;
let ComputerWin = 0;
//let card1 = document.getElementById("firstCard");
//let card2 = document.getElementById("secondCard");

let card = new Array(36);

/*let VC = "http://hello.te.ua/blog/wp-content/uploads/2010/11/valet-cherva.jpg";
let VP = "http://hello.te.ua/blog/wp-content/uploads/2010/11/valet-pik.jpg";
let VB = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUn-k88j3Mf5kLS5eKSKmYpaAx3t1VmgJmOQ2uoMbhxmodR_cuszMzCBtX_conc-8urZA&usqp=CAU";
let VH = "https://i.pinimg.com/474x/41/47/54/414754dcd2e7d5ca2f99ed93c9c05035.jpg";*/

card[0] = "https://kampot.org.ua/imag/ukraine/kultura/erko/VALET-CHERVINNY.jpg";//валет червовий
card[1] = "https://kampot.org.ua/imag/ukraine/kultura/erko/VALET-VYNOVYJ.jpg";//валет піковий
card[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUn-k88j3Mf5kLS5eKSKmYpaAx3t1VmgJmOQ2uoMbhxmodR_cuszMzCBtX_conc-8urZA&usqp=CAU";//валет бубновий
card[3] = "https://i.pinimg.com/474x/41/47/54/414754dcd2e7d5ca2f99ed93c9c05035.jpg";//валет хрестовий
card[4] = "https://kampot.org.ua/imag/ukraine/kultura/erko/DAMA-CHERVINNA.jpg";//червова дама
card[5] = "https://kampot.org.ua/imag/ukraine/kultura/erko/DAMA--VYNOVA.jpg";//пікова дама
card[6] = "https://kampot.org.ua/imag/ukraine/kultura/erko/DAMA-DZVINKOVA.jpg";//бубнова дама
card[7] = "https://kampot.org.ua/imag/ukraine/kultura/erko/DAMA--ZHYROVA.jpg";//хрестова дама
card[8] = "https://kampot.org.ua/imag/ukraine/kultura/erko/KOROL-CHERVINNY.jpg";//червовий король
card[9] = "https://kampot.org.ua/imag/ukraine/kultura/erko/KOROL-VYNOVYJ.jpg";//піковий король
card[10] = "https://kampot.org.ua/imag/ukraine/kultura/erko/korol_bub.jpg";//бубновий король
card[11] = "https://kampot.org.ua/imag/ukraine/kultura/erko/KOROL-ZHYROVY.jpg";//хрестовий король
card[12] = "https://kampot.org.ua/imag/ukraine/kultura/erko/tuz.jpg";//червовий туз
card[13] = "https://i.postimg.cc/Kvgt7g0c/image.png";//піковий туз
card[14] = "https://i.postimg.cc/8zZWNB5H/image.png";//бубновий туз
card[15] = "https://i.postimg.cc/zvkvp8Hj/image.png";//трефовий туз
card[16] = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Atlas_deck_6_of_hearts.svg/1365px-Atlas_deck_6_of_hearts.svg.png";//6 черв
card[17] = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Atlas_deck_6_of_spades.svg/800px-Atlas_deck_6_of_spades.svg.png";//6 пік
card[18] = "data:image/jpeg;base64,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";//6 буб
card[19] = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Atlas_deck_6_of_clubs.svg/1365px-Atlas_deck_6_of_clubs.svg.png";//6 хрест
card[20] = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Atlas_deck_7_of_hearts.svg/1200px-Atlas_deck_7_of_hearts.svg.png";//7 черв
card[21] = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Atlas_deck_7_of_spades.svg/512px-Atlas_deck_7_of_spades.svg.png";//7 пик
card[22] = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Atlas_deck_7_of_diamonds.svg/1200px-Atlas_deck_7_of_diamonds.svg.png";//7 буб
card[23] = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Atlas_deck_7_of_clubs.svg/1200px-Atlas_deck_7_of_clubs.svg.png";//7 хрест
card[24] = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Atlas_deck_8_of_hearts.svg/682px-Atlas_deck_8_of_hearts.svg.png";//8 черв
card[25] = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atlas_deck_8_of_spades.svg/682px-Atlas_deck_8_of_spades.svg.png";//8 пік
card[26] = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Atlas_deck_8_of_diamonds.svg/682px-Atlas_deck_8_of_diamonds.svg.png";//8 буб
card[27] = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Atlas_deck_8_of_clubs.svg/682px-Atlas_deck_8_of_clubs.svg.png";//8 хрест
card[28] = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Atlas_deck_9_of_hearts.svg/682px-Atlas_deck_9_of_hearts.svg.png";//9 черв
card[29] = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Atlas_deck_9_of_spades.svg/682px-Atlas_deck_9_of_spades.svg.png";// 9 пік
card[30] = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Atlas_deck_9_of_diamonds.svg/682px-Atlas_deck_9_of_diamonds.svg.png";// 9 буб
card[31] = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Atlas_deck_9_of_clubs.svg/682px-Atlas_deck_9_of_clubs.svg.png";// 9 хрест
card[32] = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Atlas_deck_10_of_hearts.svg/682px-Atlas_deck_10_of_hearts.svg.png";// 10 черв
card[33] = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Atlas_deck_10_of_spades.svg/682px-Atlas_deck_10_of_spades.svg.png";// 10 пік 
card[34] = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Atlas_deck_10_of_diamonds.svg/682px-Atlas_deck_10_of_diamonds.svg.png";// 10 буб
card[35] = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Atlas_deck_10_of_clubs.svg/682px-Atlas_deck_10_of_clubs.svg.png";// 10 
//for(let i = 0; i < max; ++i)
	
round.onclick = () => {
	
	if(win > 0)
	{
		cardValueCounter = [0, 0];
		match = 1;
		counter[0].setAttribute("style", "border-color: gray; box-shadow: 5px 5px 10px 10px slategray; color: black; text-shadow: none");
		counter[1].setAttribute("style", "border-color: gray; box-shadow: 5px 5px 10px 10px slategray; color: black; text-shadow: none");
		win = 0;
	}
	round.innerHTML = "Generate <br> try " + match + " / 3";
	let cardNumber = Math.floor(Math.random() * (max - min) + min);
		for(let i = 0; i < max; ++i)
		{
			if(cardNumber == i)
			{
				cardTable[0].style.backgroundImage ='url(' + card[i] + ")";
				cardValue[0] = cardNumber;
			}
		}
		
		let prev = cardNumber;
		cardNumber = Math.floor(Math.random() * (max - min) + min);
		
		while(cardNumber == prev)
		{
			cardNumber = Math.floor(Math.random() * (max - min) + min);
		}
		
		for(let i = 0; i < max; ++i)
		{
			if(cardNumber == i)
			{
				cardTable[1].style.backgroundImage = "url(" + card[i] + ")";
				cardValue[1] = cardNumber;
			}
		}
		
		for(let i = 0; i < nominal.length; ++i)
		{
			if(cardValue[i] >= 0 && cardValue[i] <= 3)
			{
				nominal[i] = 2;
			}
			if(cardValue[i] >= 4 && cardValue[i] <= 7)
			{
				nominal[i] = 3;
			}
			if(cardValue[i] >= 8 && cardValue[i] <= 11)
			{
				nominal[i] = 4;
			}
			if(cardValue[i] >= 12 && cardValue[i] <= 15)
			{
				nominal[i] = 11;
			}
			if(cardValue[i] >= 16 && cardValue[i] <= 19)
			{
				nominal[i] = 6;
			}
			if(cardValue[i] >= 20 && cardValue[i] <= 23)
			{
				nominal[i] = 7;
			}
			if(cardValue[i] >= 24 && cardValue[i] <= 27)
			{
				nominal[i] = 8;
			}
			if(cardValue[i] >= 28 && cardValue[i] <= 31)
			{
				nominal[i] = 9;
			}
			if(cardValue[i] >= 32 && cardValue[i] <= 35)
			{
				nominal[i] = 10;
			}
			
			cardValueCounter[i] += nominal[i];
			counter[i].innerHTML = cardValueCounter[i];
			
		}
		
		++match;
		
		if(match > 3)
		{
			if(cardValueCounter[0] > cardValueCounter[1])
			{
				round.innerHTML = user + " win";
				counter[0].setAttribute("style", "border-color: forestgreen; box-shadow: 5px 5px 10px 10px lawngreen; color: forestgreen; text-shadow: 0px 0px 5px lawngreen");
				counter[1].setAttribute("style", "border-color: red; box-shadow: 5px 5px 10px 10px red; color: red; text-shadow: 0px 0px 5px salmon");
			}
			
			if(cardValueCounter[0] < cardValueCounter[1])
			{
				round.innerHTML = "Computer win";
				counter[0].setAttribute("style", "border-color: red; box-shadow: 5px 5px 10px 10px red; color: red; text-shadow: 0px 0px 5px salmon");
				counter[1].setAttribute("style", "border-color: forestgreen; box-shadow: 5px 5px 10px 10px lawngreen; color: forestgreen; text-shadow: 0px 0px 5px lawngreen");
			}
			
			if(cardValueCounter[0] == cardValueCounter[1])
			{
				round.innerHTML = "Equal";
				counter[0].setAttribute("style", "border-color: forestgreen; box-shadow: 5px 5px 10px 10px lawngreen; color: forestgreen; text-shadow: 0px 0px 5px lawngreen");
				counter[1].setAttribute("style", "border-color: forestgreen; box-shadow: 5px 5px 10px 10px lawngreen; color: forestgreen; text-shadow: 0px 0px 5px lawngreen");
			}
			
			++win;
		}
	
			
/*switch(card)
{
	case 1:
	card1.style.backgroundImage ='url(' + VH + ")"; // валет хрестовий
	//https://i.pinimg.com/474x/41/47/54/414754dcd2e7d5ca2f99ed93c9c05035.jpg
	nominal = 2;
	break;
	case 2:
	card1.style.backgroundImage ='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2NfhFBeckLAyiu0TDaYdRDEIz1tXHeJtZ8_rtUUp0jZ40GtfBliMVOaybk2qEsfYgkY&usqp=CAU")'; //король червовий
	nominal = 2;
	break;
	case 3:
	card1.style.backgroundImage ='url("VB")'; // валет бубновий
	nominal = 2;
	break;
	case 4:
	card1.style.backgroundImage ='url("http://hello.te.ua/blog/wp-content/uploads/2010/11/dama-cherva.jpg")'; //червова дама
	//data:image/jpeg;base64,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
	//http://hello.te.ua/blog/wp-content/uploads/2010/11/korol-bubna.jpg
	//https://media.discordapp.net/attachments/673999736482693131/1172305260115673109/image.png?ex=655fd55a&is=654d605a&hm=8adcb74780d3517077a652f14bc580a8e914eb7419ac66e0b7c33c2438080eb7&=
	nominal = 3;
	break;
	case 5:
	card1.style.backgroundImage ='url("VP")'; //піковий валет
	break;
}
*/
}