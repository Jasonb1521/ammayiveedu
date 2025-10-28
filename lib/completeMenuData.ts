export interface MenuItemNew {
  name: string;
  tamilName: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tamilName: string;
  items: MenuItemNew[];
}

export const completeMenu: MenuCategory[] = [
  {
    id: "breakfast",
    name: "South Indian Breakfast",
    tamilName: "தென்னிந்திய காலை உணவு",
    items: [
      { name: "Appam", tamilName: "ஆப்பம்", price: 45 },
      { name: "Egg Appam", tamilName: "முட்டை ஆப்பம்", price: 65 },
      { name: "Idiyappam", tamilName: "இடியாப்பம்", price: 50 },
      { name: "Idly (1 Piece)", tamilName: "இட்லி (1)", price: 18 },
      { name: "Chilli Idly", tamilName: "சில்லி இட்லி", price: 75 },
      { name: "Paniyaram", tamilName: "பணியாரம்", price: 75 },
      { name: "Egg Paniyaram", tamilName: "முட்டை பணியாரம்", price: 85 },
    ]
  },
  {
    id: "uttapam",
    name: "Uttapam Varieties",
    tamilName: "ஊத்தப்பம் வகைகள்",
    items: [
      { name: "Uttapam", tamilName: "ஊத்தப்பம்", price: 65 },
      { name: "Egg Uttapam", tamilName: "முட்டை ஊத்தப்பம்", price: 80 },
      { name: "Tomato Uttapam", tamilName: "தக்காளி ஊத்தப்பம்", price: 65 },
      { name: "Variety Uttapam (5)", tamilName: "வெரைட்டி ஊத்தப்பம் (5)", price: 130 },
      { name: "Onion Uttapam", tamilName: "வெங்காய ஊத்தப்பம்", price: 75 },
      { name: "Ghee Onion Uttapam", tamilName: "நெய் வெங்காய ஊத்தப்பம்", price: 90 },
    ]
  },
  {
    id: "dosa",
    name: "Dosa Varieties",
    tamilName: "தோசை வகைகள்",
    items: [
      { name: "Kal Dosai", tamilName: "கல் தோசை", price: 40 },
      { name: "Sadha Dosai", tamilName: "சாதா தோசை", price: 50 },
      { name: "Egg Kal Dosai", tamilName: "முட்டை கல் தோசை", price: 85 },
      { name: "Egg Dosai", tamilName: "முட்டை தோசை", price: 85 },
      { name: "Mutton Dosai", tamilName: "மட்டன் தோசை", price: 190 },
      { name: "Chicken Dosai", tamilName: "சிக்கன் தோசை", price: 170 },
      { name: "Roast Dosai", tamilName: "ரோஸ்ட் தோசை", price: 70 },
      { name: "Ghee Roast Dosai", tamilName: "நெய் ரோஸ்ட் தோசை", price: 90 },
      { name: "Onion Roast Dosai", tamilName: "வெங்காய ரோஸ்ட் தோசை", price: 90 },
      { name: "Podi Roast Dosai", tamilName: "பொடி ரோஸ்ட் தோசை", price: 90 },
      { name: "Ghee Onion Roast Dosai", tamilName: "நெய் வெங்காய ரோஸ்ட் தோசை", price: 105 },
      { name: "Onion Egg Roast Dosai", tamilName: "வெங்காய முட்டை ரோஸ்ட் தோசை", price: 110 },
      { name: "Egg Roast Dosai", tamilName: "முட்டை ரோஸ்ட் தோசை", price: 105 },
      { name: "Mutton Roast Dosai", tamilName: "மட்டன் ரோஸ்ட் தோசை", price: 220 },
      { name: "Chicken Roast Dosai", tamilName: "சிக்கன் ரோஸ்ட் தோசை", price: 210 },
      { name: "Mushroom Roast Dosai", tamilName: "காளான் ரோஸ்ட் தோசை", price: 115 },
      { name: "Gobi Roast Dosai", tamilName: "கோபி ரோஸ்ட் தோசை", price: 115 },
      { name: "Salem Roast Dosai", tamilName: "சேலம் ரோஸ்ட் தோசை", price: 110 },
      { name: "Paneer Roast Dosai", tamilName: "பன்னீர் ரோஸ்ட் தோசை", price: 125 },
    ]
  },
  {
    id: "chapati",
    name: "Chapati & Kothu",
    tamilName: "சப்பாத்தி & கொத்து",
    items: [
      { name: "Chapati (1)", tamilName: "சப்பாத்தி (1)", price: 35 },
      { name: "Egg Chapati", tamilName: "முட்டை சப்பாத்தி", price: 60 },
      { name: "Veg Kothu Chapati", tamilName: "வெஜ் கொத்து சப்பாத்தி", price: 80 },
      { name: "Egg Kothu Chapati", tamilName: "முட்டை கொத்து சப்பாத்தி", price: 100 },
    ]
  },
  {
    id: "parotta",
    name: "Parotta Varieties",
    tamilName: "பரோட்டா வகைகள்",
    items: [
      { name: "Parotta", tamilName: "பரோட்டா", price: 35 },
      { name: "Bun Parotta", tamilName: "பன் பரோட்டா", price: 60 },
      { name: "Egg Veetch", tamilName: "முட்டை வீச்சு", price: 80 },
      { name: "Veetch Parotta", tamilName: "வீச்சு பரோட்டா", price: 55 },
      { name: "Tandoori Parotta", tamilName: "தந்தூரி பரோட்டா", price: 50 },
      { name: "Veg Kothu Parotta", tamilName: "வெஜ் கொத்து பரோட்டா", price: 90 },
      { name: "Egg Kothu Parotta", tamilName: "முட்டை கொத்து பரோட்டா", price: 120 },
      { name: "Chilli Parotta", tamilName: "சில்லி பரோட்டா", price: 100 },
      { name: "Egg Lapa", tamilName: "முட்டை லபா", price: 130 },
      { name: "Chicken Lapa", tamilName: "சிக்கன் லபா", price: 180 },
      { name: "Mutton Lapa", tamilName: "மட்டன் லபா", price: 220 },
      { name: "Chicken Kothu Parotta", tamilName: "சிக்கன் கொத்து பரோட்டா", price: 190 },
      { name: "Mutton Kothu Parotta", tamilName: "மட்டன் கொத்து பரோட்டா", price: 220 },
    ]
  },
  {
    id: "vegetarian-masala",
    name: "Vegetarian Masala",
    tamilName: "சைவ மசாலா",
    items: [
      { name: "Mushroom Masala", tamilName: "காளான் மசாலா", price: 180 },
      { name: "Gobi Masala", tamilName: "கோபி மசாலா", price: 180 },
      { name: "Paneer Butter Masala", tamilName: "பன்னீர் பட்டர் மசாலா", price: 200 },
      { name: "Kadai Paneer Masala", tamilName: "கடாய் பனீர் மசாலா", price: 230 },
    ]
  },
  {
    id: "egg",
    name: "Egg Specialties",
    tamilName: "முட்டை சிறப்பு",
    items: [
      { name: "Egg Poriyal (2 Eggs)", tamilName: "முட்டை பொரியல் (2 முட்டை)", price: 50 },
      { name: "Omelette", tamilName: "ஆம்லெட்", price: 30 },
      { name: "Kalaki/Half Boiled", tamilName: "கலாக்கி / ஹாஃப் போயில்", price: 30 },
      { name: "Egg Masala", tamilName: "முட்டை மசாலா", price: 130 },
      { name: "Egg Varuthakari", tamilName: "முட்டை வறுத்த கறி", price: 130 },
    ]
  },
  {
    id: "vegetarian-starters",
    name: "Vegetarian Starters",
    tamilName: "சைவ ஸ்டார்ட்டர்ஸ்",
    items: [
      { name: "Babycorn Chilli", tamilName: "பேபிகார்ன் சில்லி", price: 110 },
      { name: "Babycorn 65", tamilName: "பேபிகார்ன் 65", price: 120 },
      { name: "Babycorn Manchurian", tamilName: "பேபிகார்ன் மஞ்சூரியன்", price: 130 },
      { name: "Pepper Babycorn", tamilName: "பெப்பர் பேபிகார்ன்", price: 140 },
      { name: "Mushroom Chilli", tamilName: "காளான் சில்லி", price: 125 },
      { name: "Mushroom 65", tamilName: "காளான் 65", price: 135 },
      { name: "Mushroom Manchurian", tamilName: "காளான் மஞ்சூரியன்", price: 150 },
      { name: "Pepper Mushroom", tamilName: "பெப்பர் காளான்", price: 170 },
      { name: "Gobi Chilli", tamilName: "கோபி சில்லி", price: 115 },
      { name: "Gobi 65", tamilName: "கோபி 65", price: 130 },
      { name: "Gobi Manchurian", tamilName: "கோபி மஞ்சூரியன்", price: 140 },
      { name: "Pepper Gobi", tamilName: "பெப்பர் கோபி", price: 170 },
      { name: "Chilli Paneer", tamilName: "சில்லி பன்னீர்", price: 170 },
      { name: "Paneer 65", tamilName: "பன்னீர் 65", price: 185 },
      { name: "Paneer Manchurian", tamilName: "பன்னீர் மஞ்சூரியன்", price: 190 },
      { name: "Dragon Paneer", tamilName: "டிராகன் பன்னீர்", price: 200 },
      { name: "Pepper Paneer", tamilName: "பெப்பர் பன்னீர்", price: 180 },
    ]
  },
  {
    id: "soups",
    name: "Soups",
    tamilName: "சூப்",
    items: [
      { name: "Attukal Soup", tamilName: "ஆட்டுக்கால் சூப்", price: 140 },
      { name: "Chicken Soup", tamilName: "நாட்டு கோழி சூப்", price: 130 },
    ]
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    tamilName: "பிரைடு ரைஸ்",
    items: [
      { name: "Veg Fried Rice", tamilName: "வெஜ் பிரைடு ரைஸ்", price: 120 },
      { name: "Egg Fried Rice", tamilName: "முட்டை பிரைடு ரைஸ்", price: 150 },
      { name: "Chicken Fried Rice", tamilName: "சிக்கன் பிரைடு ரைஸ்", price: 180 },
      { name: "Mushroom Fried Rice", tamilName: "காளான் பிரைடு ரைஸ்", price: 170 },
      { name: "Mixed Veg Fried Rice", tamilName: "மிக்ஸ்ட் வெஜ் பிரைடு ரைஸ்", price: 170 },
      { name: "Paneer Fried Rice", tamilName: "பன்னீர் பிரைடு ரைஸ்", price: 180 },
      { name: "Mixed Non-Veg Rice", tamilName: "மிக்ஸ்ட் நான்-வெஜ் ரைஸ்", price: 200 },
      { name: "Babycorn Rice", tamilName: "பேபிகார்ன் ரைஸ்", price: 170 },
      { name: "Schezwan Veg Fried Rice", tamilName: "செஸ்வான் வெஜ் பிரைடு ரைஸ்", price: 130 },
      { name: "Schezwan Egg Fried Rice", tamilName: "செஸ்வான் முட்டை பிரைடு ரைஸ்", price: 160 },
      { name: "Schezwan Chicken Fried Rice", tamilName: "செஸ்வான் சிக்கன் பிரைடு ரைஸ்", price: 200 },
    ]
  },
  {
    id: "noodles",
    name: "Noodles",
    tamilName: "நூடுல்ஸ்",
    items: [
      { name: "Veg Noodles", tamilName: "வெஜ் நூடுல்ஸ்", price: 120 },
      { name: "Egg Noodles", tamilName: "முட்டை நூடுல்ஸ்", price: 150 },
      { name: "Chicken Noodles", tamilName: "சிக்கன் நூடுல்ஸ்", price: 180 },
      { name: "Mushroom Noodles", tamilName: "காளான் நூடுல்ஸ்", price: 170 },
      { name: "Mixed Veg Noodles", tamilName: "மிக்ஸ்ட் வெஜ் நூடுல்ஸ்", price: 170 },
      { name: "Paneer Fried Noodles", tamilName: "பன்னீர் பிரைட் நூடுல்ஸ்", price: 180 },
      { name: "Mixed Non-Veg Noodles", tamilName: "மிக்ஸ்ட் நான்-வெஜ் நூடுல்ஸ்", price: 200 },
      { name: "Babycorn Noodles", tamilName: "பேபிகார்ன் நூடுல்ஸ்", price: 170 },
      { name: "Schezwan Veg Noodles", tamilName: "செஸ்வான் வெஜ் நூடுல்ஸ்", price: 130 },
      { name: "Schezwan Egg Noodles", tamilName: "செஸ்வான் முட்டை நூடுல்ஸ்", price: 160 },
      { name: "Schezwan Chicken Noodles", tamilName: "செஸ்வான் சிக்கன் நூடுல்ஸ்", price: 200 },
    ]
  },
  {
    id: "meals",
    name: "Meals",
    tamilName: "சாப்பாடு",
    items: [
      { name: "Meals", tamilName: "சாப்பாடு", price: 150 },
    ]
  },
  {
    id: "biryani",
    name: "Biryani Specialties",
    tamilName: "பிரியாணி சிறப்பு",
    items: [
      { name: "Mutton Biryani", tamilName: "மட்டன் பிரியாணி", price: 300 },
      { name: "Country Chicken Biryani", tamilName: "நாட்டு கோழி பிரியாணி", price: 280 },
      { name: "Chicken Biryani", tamilName: "சிக்கன் பிரியாணி", price: 250 },
      { name: "Van Kozhi Biryani", tamilName: "வான் கோழி பிரியாணி", price: 400 },
      { name: "Plain Biryani", tamilName: "பிளைன் பிரியாணி", price: 170 },
    ]
  },
  {
    id: "mutton-varieties",
    name: "Mutton Varieties",
    tamilName: "மட்டன் வகைகள்",
    items: [
      { name: "Mutton Fry", tamilName: "மட்டன் வறுவல்", price: 300 },
      { name: "Nallampatti Mutton Fry", tamilName: "நல்லாம்பட்டி மட்டன் வறுவல்", price: 330 },
      { name: "Mutton Pallipalayam", tamilName: "மட்டன் பள்ளிப்பாளையம்", price: 320 },
      { name: "Mutton Eeral (Liver)", tamilName: "மட்டன் ஈரல் வறுவல்", price: 270 },
      { name: "Mutton Kothu Kari", tamilName: "மட்டன் கொத்துக்கறி", price: 260 },
      { name: "Mutton Egg Kothu Kari", tamilName: "மட்டன் முட்டை கொத்துக்கறி", price: 280 },
      { name: "Thala Kari", tamilName: "தலைகறி வறுவல்", price: 230 },
      { name: "Egg Brain Fry", tamilName: "முட்டை மூளை வறுவல்", price: 240 },
      { name: "Brain Fry", tamilName: "மூளை வறுவல்", price: 220 },
      { name: "Nalli Fry", tamilName: "நல்லி வறுவல்", price: 320 },
      { name: "Chest Born Fry", tamilName: "நெஞ்சு எலும்பு வறுவல்", price: 270 },
      { name: "Suvarotti Varuval", tamilName: "சுவரொட்டி வறுவல்", price: 250 },
      { name: "Kudal Fry", tamilName: "குடல் வறுவல்", price: 230 },
      { name: "Kudal Egg", tamilName: "குடல் முட்டை வறுவல்", price: 250 },
      { name: "Kudal Blood Fry", tamilName: "குடல் ரத்த வறுவல்", price: 260 },
      { name: "Blood Poriyal", tamilName: "ரத்த பொரியல்", price: 100 },
      { name: "Mutton Balls (1 Set)", tamilName: "மட்டன் கோலா (1 செட்)", price: 40 },
    ]
  },
  {
    id: "chicken-varieties",
    name: "Chicken Varieties",
    tamilName: "சிக்கன் வகைகள்",
    items: [
      { name: "Boneless Chicken 65", tamilName: "சிக்கன் 65", price: 230 },
      { name: "Boneless Chilli Chicken", tamilName: "சில்லி சிக்கன்", price: 215 },
      { name: "Chicken Lollipop (4 Pieces)", tamilName: "சிக்கன் லாலிபாப் (4 Pcs)", price: 250 },
      { name: "Boneless Chinthamani Chilli Chicken", tamilName: "சிந்தாமணி சில்லி சிக்கன்", price: 235 },
      { name: "Pallipalayam Chicken", tamilName: "பள்ளிப்பாளையம் சிக்கன்", price: 220 },
      { name: "Boneless Hyderabad Chicken", tamilName: "ஹைதராபாத் சிக்கன்", price: 250 },
      { name: "Boneless Chicken Monika", tamilName: "சிக்கன் மொனிகா", price: 230 },
      { name: "Boneless Dragon Chicken", tamilName: "டிராகன் சிக்கன்", price: 240 },
      { name: "Boneless Schezwan Chicken", tamilName: "செஸ்வான் சிக்கன்", price: 240 },
      { name: "Boneless Kerala Chicken", tamilName: "கேரளா சிக்கன்", price: 230 },
      { name: "Boneless Garlic Chicken", tamilName: "கார்லிக் சிக்கன்", price: 240 },
      { name: "Boneless Ginger Chicken", tamilName: "ஜிஞ்சர் சிக்கன்", price: 230 },
      { name: "Boneless Pepper Chicken", tamilName: "பெப்பர் சிக்கன்", price: 230 },
      { name: "Boneless Chicken Manchurian", tamilName: "சிக்கன் மஞ்சூரியன்", price: 230 },
      { name: "Chicken Varuval", tamilName: "சிக்கன் வறுவல்", price: 220 },
      { name: "Chicken Leg Fry (2pcs)", tamilName: "சிக்கன் லெக் (2 Pcs)", price: 220 },
      { name: "Nallampatti Chicken Varuval", tamilName: "நல்லாம்பட்டி சிக்கன் வறுவல்", price: 250 },
    ]
  },
  {
    id: "gravy-kulambu",
    name: "Gravy & Kulambu",
    tamilName: "கிரேவி & குழம்பு",
    items: [
      { name: "Kudal Kulambu", tamilName: "குடல் குழம்பு", price: 240 },
      { name: "Chest Born Kolambu", tamilName: "மட்டன்நெஞ்சு எலும்பு குழம்பு", price: 290 },
      { name: "Nalli Kulambu", tamilName: "நல்லி குழம்பு", price: 340 },
      { name: "Mutton Kulambu", tamilName: "மட்டன் குழம்பு", price: 320 },
      { name: "Country Chicken Kulambu", tamilName: "நாட்டு கோழி குழம்பு", price: 300 },
      { name: "Aattukal Paya", tamilName: "ஆட்டுக்கால் பாயா", price: 250 },
      { name: "Boneless Chettinad Chicken", tamilName: "செட்டிநாடு சிக்கன்", price: 240 },
      { name: "Boneless Butter Chicken", tamilName: "பட்டர் சிக்கன்", price: 260 },
      { name: "Kadai Chicken Boneless", tamilName: "கடாய் சிக்கன்", price: 250 },
      { name: "Fish Kulambu", tamilName: "மீன் குழம்பு", price: 270 },
    ]
  },
  {
    id: "shawarma",
    name: "Shawarma",
    tamilName: "ஷாவர்மா",
    items: [
      { name: "Shawarma Roll", tamilName: "ஷாவர்மா ரோல்", price: 95 },
      { name: "Special Shawarma Roll", tamilName: "ஸ்பெஷல் ஷாவர்மா ரோல்", price: 120 },
      { name: "Plate Shawarma", tamilName: "பிளேட் ஷாவர்மா", price: 150 },
      { name: "Pepper Shawarma", tamilName: "பெப்பர் ஷாவர்மா", price: 100 },
    ]
  },
  {
    id: "country-chicken",
    name: "Country Chicken Special",
    tamilName: "நாட்டு கோழி சிறப்பு",
    items: [
      { name: "Country Chicken Fry", tamilName: "நாட்டு கோழி வறுவல்", price: 280 },
      { name: "Country Chicken Salt Kari", tamilName: "நாட்டு கோழி உப்புகறி", price: 320 },
      { name: "Country Chicken Pichupottakari (Boneless)", tamilName: "நாட்டு கோழி பிச்சுப்போட்டகறி", price: 300 },
      { name: "Nallampatti Country Chicken Fry", tamilName: "நல்லாம்பட்டி நாட்டுக்கோழி வறுவல்", price: 300 },
    ]
  },
  {
    id: "quail",
    name: "Quail (Kadai)",
    tamilName: "காடை",
    items: [
      { name: "Chilli Kadai", tamilName: "சில்லி காடை", price: 160 },
      { name: "Kadai 65", tamilName: "காடை 65", price: 170 },
      { name: "Pepper Kadai", tamilName: "பெப்பர் காடை", price: 190 },
      { name: "Kadai Varuval", tamilName: "காடை வறுவல்", price: 190 },
    ]
  },
  {
    id: "seafood",
    name: "Seafood",
    tamilName: "கடல் உணவு",
    items: [
      { name: "Chilli Fish", tamilName: "சில்லி மீன்", price: 240 },
      { name: "Fish Fry (Vanjiram)", tamilName: "மீன் வறுவல் (வஞ்சிரம்)", price: 270 },
      { name: "Nethli Fish Fry", tamilName: "நெத்திலி மீன் வறுவல்", price: 220 },
      { name: "Manthal Fish", tamilName: "மந்தல் மீன்", price: 250 },
      { name: "Prawns Fry", tamilName: "இறால் வறுவல்", price: 240 },
      { name: "Prawns Chilli", tamilName: "இறால் சில்லி", price: 275 },
      { name: "Prawns 65", tamilName: "இறால் 65", price: 285 },
      { name: "Prawns Manchurian", tamilName: "இறால் மஞ்சூரியன்", price: 285 },
      { name: "Prawns Pepper", tamilName: "இறால் பெப்பர்", price: 280 },
      { name: "Nandu Fry", tamilName: "நண்டு வறுவல்", price: 270 },
      { name: "Fish Manchurian", tamilName: "மீன் மஞ்சூரியன்", price: 220 },
      { name: "Garlic Fish", tamilName: "கார்லிக் மீன்", price: 220 },
      { name: "Schezwan Fish", tamilName: "செஸ்வான் மீன்", price: 220 },
      { name: "Shark Puttu", tamilName: "சுறா புட்டு", price: 210 },
      { name: "Vaval Fish", tamilName: "வாவல் மீன்", price: 250 },
      { name: "Kanava Fish", tamilName: "கணவா மீன்", price: 240 },
      { name: "Nandu Lollipop", tamilName: "நண்டு லாலிபாப்", price: 250 },
      { name: "Finger Fish", tamilName: "ஃபிங்கர் ஃபிஷ்", price: 250 },
      { name: "Vilai Meen", tamilName: "விளை மீன்", price: 250 },
      { name: "Pepper Fish", tamilName: "பெப்பர் மீன்", price: 200 },
    ]
  },
  {
    id: "special-meat",
    name: "Special Meat",
    tamilName: "சிறப்பு இறைச்சி",
    items: [
      { name: "Duck Fry", tamilName: "வாத்து வறுவல்", price: 350 },
      { name: "Pigeon Fry", tamilName: "புறா வறுவல்", price: 350 },
      { name: "Rabbit Fry", tamilName: "முயல்வறுவல்", price: 350 },
      { name: "Turkey Fry", tamilName: "வான்கோழி வறுவல்", price: 350 },
    ]
  },
  {
    id: "indian-breads",
    name: "Indian Breads",
    tamilName: "இந்திய ரொட்டி",
    items: [
      { name: "Naan", tamilName: "நான்", price: 40 },
      { name: "Butter Naan", tamilName: "பட்டர் நான்", price: 45 },
      { name: "Garlic Naan", tamilName: "கார்லிக் நான்", price: 50 },
      { name: "Rotti", tamilName: "ரொட்டி", price: 40 },
      { name: "Rumali Rotti", tamilName: "ருமாலி ரொட்டி", price: 45 },
      { name: "Plain Kulcha", tamilName: "பிளைன் குல்சா", price: 45 },
      { name: "Stuffed Kulcha", tamilName: "ஸ்டஃப்ட் குல்சா", price: 60 },
      { name: "Aloo Paratha", tamilName: "ஆலு பராத்தா", price: 65 },
      { name: "Ammayi Veedu Spl Naan", tamilName: "அம்மாய் வீடு ஸ்பெஷல் நான்", price: 65 },
      { name: "Kadak Roti", tamilName: "கடக் ரொட்டி", price: 40 },
      { name: "Butter Kulcha", tamilName: "பட்டர் குல்சா", price: 50 },
      { name: "Butter Rotti", tamilName: "பட்டர் ரொட்டி", price: 50 },
    ]
  },
  {
    id: "tandoori",
    name: "Tandoori Items",
    tamilName: "தந்தூரி",
    items: [
      { name: "Tandoori Chicken (Half)", tamilName: "தந்தூரி சிக்கன் (Half)", price: 235 },
      { name: "Tandoori Chicken (Full)", tamilName: "தந்தூரி சிக்கன் (Full)", price: 470 },
      { name: "Chicken Tikka", tamilName: "சிக்கன் திக்கா", price: 250 },
      { name: "Paneer Tikka", tamilName: "பன்னீர் திக்கா", price: 230 },
      { name: "Tangdi Kabab (3 Pcs)", tamilName: "தண்டி கபாப் (3 பீச்கள்)", price: 260 },
      { name: "Mushroom Tikka", tamilName: "காளான் திக்கா", price: 150 },
    ]
  },
  {
    id: "grill",
    name: "Grill Items",
    tamilName: "கிரில்",
    items: [
      { name: "Grill Chicken (Half)", tamilName: "கிரில் சிக்கன் (Half)", price: 200 },
      { name: "Grill Chicken (Full)", tamilName: "கிரில் சிக்கன் (Full)", price: 380 },
      { name: "Pepper Grill Chicken (Half)", tamilName: "பெப்பர் கிரில் சிக்கன் (Half)", price: 220 },
      { name: "Pepper Grill Chicken (Full)", tamilName: "பெப்பர் கிரில் சிக்கன் (Full)", price: 400 },
    ]
  },
  {
    id: "beverages",
    name: "Beverages",
    tamilName: "பானங்கள்",
    items: [
      { name: "Lemon Juice", tamilName: "எலுமிச்சை ஜூஸ்", price: 40 },
      { name: "Apple Juice", tamilName: "ஆப்பிள் ஜூஸ்", price: 80 },
      { name: "Orange Juice", tamilName: "ஆரஞ்சு ஜூஸ்", price: 80 },
      { name: "Sathukudi Juice", tamilName: "சாத்துக்குடி ஜூஸ்", price: 80 },
      { name: "Mulam Palam Juice", tamilName: "முலாம் பழம் ஜூஸ்", price: 150 },
      { name: "Grapes Juice", tamilName: "திராட்சை ஜூஸ்", price: 70 },
      { name: "Pomegranate Juice", tamilName: "மாதுளை ஜூஸ்", price: 110 },
      { name: "Pine Apple", tamilName: "அன்னாசி ஜூஸ்", price: 70 },
      { name: "Lime Soda", tamilName: "லைம் சோடா", price: 50 },
      { name: "Milkshake", tamilName: "மில்க்ஷேக்", price: 147 },
      { name: "Goli Soda", tamilName: "கோலி சோடா", price: 30 },
      { name: "Water", tamilName: "தண்ணீர்", price: 20 },
    ]
  },
  {
    id: "ice-creams",
    name: "Ice Creams & Desserts",
    tamilName: "ஐஸ்கிரீம் & இனிப்பு",
    items: [
      { name: "Vanilla Ice Cream", tamilName: "வெண்ணிலா ஐஸ்கிரீம்", price: 80 },
      { name: "Chocolate Ice Cream", tamilName: "சாக்லேட் ஐஸ்கிரீம்", price: 90 },
      { name: "Mango Ice Cream", tamilName: "மாம்பழ ஐஸ்கிரீம்", price: 90 },
      { name: "Butterscotch Ice Cream", tamilName: "பட்டர்ஸ்காட்ச் ஐஸ்கிரீம்", price: 90 },
      { name: "Black Currant Ice Cream", tamilName: "பிளாக் கரண்ட் ஐஸ்கிரீம்", price: 90 },
      { name: "Strawberry Ice Cream", tamilName: "ஸ்ட்ராபெரி ஐஸ்கிரீம்", price: 90 },
      { name: "Pista Ice Cream", tamilName: "பிஸ்தா ஐஸ்கிரீம்", price: 90 },
      { name: "Falooda", tamilName: "பலூடா", price: 50 },
    ]
  },
];