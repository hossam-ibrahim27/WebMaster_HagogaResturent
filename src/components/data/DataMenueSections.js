const tabs = [
    {
        id: 1, label: "مشوي علي الفحم",
        src: "../../../src//images/oKgfVF8F9y.png",
        food: [
            { label: "ربع كفته ضاني سبشيال", price: 175.44, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ربع سجق", price: 153.51, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ربع كباب وكفته ضاني", price: 214.91, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ربع كباب وكفته بتلو", price: 214.91, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ربع كباب ضاني", price: 263.16, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ربع كباب بتلو", price: 263.16, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ثلث ريش وكفته", price: 298.25, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ثلث كباب وريش", price: 342.11, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ربع كبده ضاني مشوية", price: 192.98, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "نص فرخه مشوية", price: 127.19, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "ربع شيش طاووك", price: 118.42, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "(ضلع)ترويقه", price: 324.56, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "نيفة الحاجة", price: 350.88, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "صينيه حجوجة", price: 1491.23, src: "../../../src//images/2xfO3THyQN.png" },
            { label: "صينية حبايب الحاجة", price: 2719.30, src: "../../../src//images/2xfO3THyQN.png" },
        ]
    },
    {
        id: 2, label: "فرن فلاحي",
        src: "../../../src//images/xWPkeXDtJO.png",
        food: [
            { label: "صينيه رقاق", price: 118.42, src: "../../../src//images/SfieQBMV9L.png" },
            { label: "صينيه رقاق حجوجة محشي بط مخلي", price: 175.44, src: "../../../src//images/SfieQBMV9L.png" },
            { label: "ارز معمر لبن وقشكة بلدي", price: 105.25, src: "../../../src//images/SfieQBMV9L.png" },
            { label: "رقاق قشطه زبده", price: 135.96, src: "../../../src//images/SfieQBMV9L.png" },
        ]
    },
    {
        id: 3, label: "مطبخ حجوجة",
        src: "../../../src//images/9S2AbSfmUO.png",
        food: [
            { label: "ورق عنب كوارغ", price: 293.86, src: "../../../src//images/mlh87BZ4Tq.png" },
            { label: "ورق عنب باللحمه", price: 241.23, src: "../../../src//images/mlh87BZ4Tq.png" },
            { label: "موزة ضاني بالبطاطس", price: 368.42, src: "../../../src//images/mlh87BZ4Tq.png" },
            { label: "ورق عنب بالموزة الضاني", price: 385.96, src: "../../../src//images/mlh87BZ4Tq.png" },
            { label: "لوح ضاني ورق عنب", price: 368.42, src: "../../../src//images/mlh87BZ4Tq.png" },
            { label: "لوحة ضاني بالبطاطس", price: 359.65, src: "../../../src//images/mlh87BZ4Tq.png" },
            { label: "رقبه ضاني ورق عنب", price: 359.65, src: "../../../src//images/mlh87BZ4Tq.png" },
            { label: "رقبة ضاني بالبطاطس", price: 350.88, src: "../../../src//images/mlh87BZ4Tq.png" },
            { label: "لحمة بالبطاطس", price: 175.44, src: "../../../src//images/mlh87BZ4Tq.png" },
        ]
    },
    {
        id: 4, label: "الجريل",
        src: "../../../src//images/ccgzEZ1uNx.png",
        food: [
            { label: "ورق لحمة", price: 192.98, src: "../../../src//images/al7oLEqyTk.png" },
            { label: "ورق سجق", price: 162.28, src: "../../../src//images/al7oLEqyTk.png" },
        ]
    },
    {
        id: 5, label: "حمام وبط",
        src: "../../../src//images/IvY9mqxyph.png",
        food: [
            { label: "حمام محشي", price: 127.19, src: "../../../src//images/1epOGmVdDV.png" },
            { label: "برام برج حمام", price: 162.28, src: "../../../src//images/1epOGmVdDV.png" },
            { label: "حمام قشطة", price: 149.12, src: "../../../src//images/1epOGmVdDV.png" },
            { label: "مزاليكا", price: 109.65, src: "../../../src//images/1epOGmVdDV.png" },
            { label: "نص بطه", price: 307.02, src: "../../../src//images/1epOGmVdDV.png" },
            { label: "نص بطه ورق عنب", price: 342.11, src: "../../../src//images/1epOGmVdDV.png" },
            { label: "نص بطة مع رز وملوخية", price: 333.33, src: "../../../src//images/1epOGmVdDV.png" },
        ]
    },
    {
        id: 6, label: "محشي بيتي",
        src: "../../../src//images/aFb00gumIc.png",
        food: [
            { label: "ورق عنب", price: 61.40, src: "../../../src//images/7zGTnRPkpe.png" },
            { label: "محشي كرنب", price: 52.63, src: "../../../src//images/7zGTnRPkpe.png" },
            { label: "(خضار) بتنجان وفلفل", price: 43.86, src: "../../../src//images/7zGTnRPkpe.png" },
            { label: "ممبار", price: 61.40, src: "../../../src//images/7zGTnRPkpe.png" },
            { label: "سرفيس محاشي", price: 175.44, src: "../../../src//images/7zGTnRPkpe.png" },
        ]
    },
    {
        id: 7, label: "سفرة",
        src: "../../../src//images/4t7OXa24GD.png",
        food: [
            { label: "ملوخيه", price: 52.63, src: "../../../src//images/RQXGKu3qgO.png" },
        ]
    },
    {
        id: 8, label: "محمر بالزبده",
        src: "../../../src//images/JeRQzX8K3y.png",
        food: [
            { label: "كبدة بتلو", price: 210.53, src: "../../../src//images/2dw8MFNKnn.png" },
            { label: "سجق زبدة", price: 171.05, src: "../../../src//images/2dw8MFNKnn.png" },
            { label: "مخاصي زبدة", price: 171.05, src: "../../../src//images/2dw8MFNKnn.png" },
            { label: "كبدة سبيشيال ضاني في الليه", price: 192.98, src: "../../../src//images/2dw8MFNKnn.png" },
            { label: "مناب العمدة جديد", price: 307.02, src: "../../../src//images/2dw8MFNKnn.png" },
        ]
    },
    {
        id: 9, label: "طواجن فلاحي",
        src: "../../../src//images/r24o3eSoVe.png",
        food: [
            { label: "طاجن بصلية", price: 184.21, src: "../../../src//images/9lqf0iBSlo.png" },
            { label: "طاجن عكاوي", price: 350.88, src: "../../../src//images/9lqf0iBSlo.png" },
            { label: "طاجن ترويقة بالبصل", price: 333.33, src: "../../../src//images/9lqf0iBSlo.png" },
            { label: "طاجن فريك باللحمة", price: 184.21, src: "../../../src//images/9lqf0iBSlo.png" },
            { label: "طاجن باميه باللحمه", price: 184.21, src: "../../../src//images/9lqf0iBSlo.png" },
        ]
    },
    {
        id: 10, label: "وجبة أطفال",
        src: "../../../src//images/MNRXGXjPG1.png",
        food: [
            { label: "ملوخيه ورز كوكو", price: 157.89, src: "../../../src//images/XvEKjtu22X.png" },
        ]
    },
    {
        id: 11, label: "مشروبات",
        src: "../../../src//images/pZ77Y3QY5w.png",
        food: [
            { label: "شاي", price: 21.93, src: "../../../src//images/1DyqvHhOkK.png" },
            { label: "حاجة ساقعة", price: 21.93, src: "../../../src//images/1DyqvHhOkK.png" },
            { label: "تمر هندي", price: 26.32, src: "../../../src//images/1DyqvHhOkK.png" },
            { label: "سوبيا حليب وقشطة", price: 39.47, src: "../../../src//images/1DyqvHhOkK.png" },
            { label: "مياة معدنية", price: 13.16, src: "../../../src//images/1DyqvHhOkK.png" },
        ]
    },
    {
        id: 12, label: "حلو الحاجة",
        src: "../../../src//images/4j3VdotVI0.png",
        food: [
            { label: "مهلبية فرن بالحليب والقشطة", price: 26.32, src: "../../../src//images/J1hVzYJcBv.png" },
            { label: "بسبوسه بالسمن البلدي", price: 39.47, src: "../../../src//images/J1hVzYJcBv.png" },
            { label: "بسبوسة قشطة حجوجة", price: 70.18, src: "../../../src//images/J1hVzYJcBv.png" },
        ]
    },
    {
        id: 13, label: "فتة ورز",
        src: "../../../src//images/k9NeXekirH.png",
        food: [
            { label: "فتة محبشة", price: 61.40, src: "../../../src//images/1S0Vk1woLb.png" },
            { label: "فتة كوارع", price: 236.84, src: "../../../src//images/1S0Vk1woLb.png" },
            { label: "فتة موزة مخلية كندوز", price: 263.16, src: "../../../src//images/1S0Vk1woLb.png" },
            { label: "فتة لوحة ضاني", price: 368.42, src: "../../../src//images/1S0Vk1woLb.png" },
            { label: "فتة لحمة", price: 192.98, src: "../../../src//images/1S0Vk1woLb.png" },
            { label: "فتة رقبة ضاني", price: 359.65, src: "../../../src//images/1S0Vk1woLb.png" },
            { label: "رز ابيض", price: 43.86, src: "../../../src//images/1S0Vk1woLb.png" },
            { label: "رز شعرية", price: 43.86, src: "../../../src//images/1S0Vk1woLb.png" },
            { label: "فتة موزة ضاني", price: 385.96, src: "../../../src//images/1S0Vk1woLb.png" },
        ]
    },
    {
        id: 14, label: "شوربه",
        src: "../../../src//images/5UAUWBzETV.png",
        food: [
            { label: "شوربة لسان", price: 26.32, src: "../../../src//images/6xRFdK2VMU.png" },
            { label: "شوربة حمام", price: 17.54, src: "../../../src//images/6xRFdK2VMU.png" },
            { label: "شوربة كوارع سادة", price: 17.54, src: "../../../src//images/6xRFdK2VMU.png" },
        ]
    },
    {
        id: 15, label: "سلطات",
        src: "../../../src//images/y5g2GYz5QE.png",
        food: [
            { label: "بلدي", price: 8.77, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "طحينة", price: 13.16, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "طرشي", price: 8.77, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "باب غنوج", price: 13.16, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "جرجير", price: 8.77, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "بتنجان مخلل", price: 13.16, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "طماطم متبلة", price: 13.16, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "جبنة قديمة فلاحي", price: 26.32, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "طرنشات حجوجة بالدقة", price: 30.70, src: "../../../src//images/H4Xn1Cua4I.png" },
            { label: "موزة فلاحي", price: 26.32, src: "../../../src//images/H4Xn1Cua4I.png" },
        ]
    },
];
export default tabs;