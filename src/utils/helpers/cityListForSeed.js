const City = [
    { cityName: "Bandarban", cityCode: "BDN", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Brahmanbaria", cityCode: "BRM", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Chandpur", cityCode: "CHP", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Chittagong", cityCode: "CTT", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Comilla", cityCode: "COM", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Cox's Bazar", cityCode: "CXB", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Feni", cityCode: "FEN", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Hill Tracts", cityCode: "HTR", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Khagrachari", cityCode: "KGR", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Lakshmipur", cityCode: "LKM", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Noakhali", cityCode: "NOA", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Rangamati", cityCode: "RNG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Sylhet", cityCode: "SYL", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Sunamganj", cityCode: "SUN", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Dhaka", cityCode: "DHK", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Faridpur", cityCode: "FRD", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Gazipur", cityCode: "GZP", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Gopalganj", cityCode: "GPG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Kishoreganj", cityCode: "KSG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Madaripur", cityCode: "MDR", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Manikganj", cityCode: "MNJ", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Munshiganj", cityCode: "MSH", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Narayanganj", cityCode: "NRG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Narsingdi", cityCode: "NSI", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Rajbari", cityCode: "RJB", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Shariatpur", cityCode: "SRP", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Tangail", cityCode: "TGL", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Barisal", cityCode: "BAR", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Bhola", cityCode: "BHO", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Jhalakathi", cityCode: "JHL", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Patuakhali", cityCode: "PAT", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Pirojpur", cityCode: "PIR", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Bagerhat", cityCode: "BGT", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Chuadanga", cityCode: "CHD", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Jessore", cityCode: "JES", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Khulna", cityCode: "KHL", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Kushtia", cityCode: "KUS", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Magura", cityCode: "MAG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Narail", cityCode: "NRL", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Satkhira", cityCode: "SSK", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Jamalpur", cityCode: "JMP", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Mymensingh", cityCode: "MYM", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Netrokona", cityCode: "NET", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Sherpur", cityCode: "SHP", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Bogra", cityCode: "BOG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Dinajpur", cityCode: "DIN", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Naogaon", cityCode: "NOG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Pabna", cityCode: "PBN", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Panchagarh", cityCode: "PCH", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Rajshahi", cityCode: "RSH", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Rangpur", cityCode: "RNG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Sirajganj", cityCode: "SIR", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Thakurgaon", cityCode: "THK", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Habiganj", cityCode: "HBG", createdAt: new Date(), updatedAt: new Date() },
    { cityName: "Maulvibazar", cityCode: "MVB", createdAt: new Date(), updatedAt: new Date() }
  ];

  City.sort((a,b)=>{
    return a.cityName.localeCompare(b.cityName);
  });

  module.exports = City;