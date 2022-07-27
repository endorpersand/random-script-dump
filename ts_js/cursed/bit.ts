type Keyable = string | number | symbol;
type AsIntersect<U extends {}> = (U extends any ? (x: U) => void : never) extends (x: infer X) => void ? X : never
type FromEntries<O extends unknown[]> = AsIntersect<{[I in keyof O]: 
    O[I] extends [infer K extends Keyable, infer V] ? {[_ in K]: V} : never
}[number]>;

type Byte = keyof BinaryMap;

type BinaryMap = {
    [0]: "00000000",
    [1]: "00000001",
    [2]: "00000010",
    [3]: "00000011",
    [4]: "00000100",
    [5]: "00000101",
    [6]: "00000110",
    [7]: "00000111",
    [8]: "00001000",
    [9]: "00001001",
    [10]: "00001010",
    [11]: "00001011",
    [12]: "00001100",
    [13]: "00001101",
    [14]: "00001110",
    [15]: "00001111",
    [16]: "00010000",
    [17]: "00010001",
    [18]: "00010010",
    [19]: "00010011",
    [20]: "00010100",
    [21]: "00010101",
    [22]: "00010110",
    [23]: "00010111",
    [24]: "00011000",
    [25]: "00011001",
    [26]: "00011010",
    [27]: "00011011",
    [28]: "00011100",
    [29]: "00011101",
    [30]: "00011110",
    [31]: "00011111",
    [32]: "00100000",
    [33]: "00100001",
    [34]: "00100010",
    [35]: "00100011",
    [36]: "00100100",
    [37]: "00100101",
    [38]: "00100110",
    [39]: "00100111",
    [40]: "00101000",
    [41]: "00101001",
    [42]: "00101010",
    [43]: "00101011",
    [44]: "00101100",
    [45]: "00101101",
    [46]: "00101110",
    [47]: "00101111",
    [48]: "00110000",
    [49]: "00110001",
    [50]: "00110010",
    [51]: "00110011",
    [52]: "00110100",
    [53]: "00110101",
    [54]: "00110110",
    [55]: "00110111",
    [56]: "00111000",
    [57]: "00111001",
    [58]: "00111010",
    [59]: "00111011",
    [60]: "00111100",
    [61]: "00111101",
    [62]: "00111110",
    [63]: "00111111",
    [64]: "01000000",
    [65]: "01000001",
    [66]: "01000010",
    [67]: "01000011",
    [68]: "01000100",
    [69]: "01000101",
    [70]: "01000110",
    [71]: "01000111",
    [72]: "01001000",
    [73]: "01001001",
    [74]: "01001010",
    [75]: "01001011",
    [76]: "01001100",
    [77]: "01001101",
    [78]: "01001110",
    [79]: "01001111",
    [80]: "01010000",
    [81]: "01010001",
    [82]: "01010010",
    [83]: "01010011",
    [84]: "01010100",
    [85]: "01010101",
    [86]: "01010110",
    [87]: "01010111",
    [88]: "01011000",
    [89]: "01011001",
    [90]: "01011010",
    [91]: "01011011",
    [92]: "01011100",
    [93]: "01011101",
    [94]: "01011110",
    [95]: "01011111",
    [96]: "01100000",
    [97]: "01100001",
    [98]: "01100010",
    [99]: "01100011",
    [100]: "01100100",
    [101]: "01100101",
    [102]: "01100110",
    [103]: "01100111",
    [104]: "01101000",
    [105]: "01101001",
    [106]: "01101010",
    [107]: "01101011",
    [108]: "01101100",
    [109]: "01101101",
    [110]: "01101110",
    [111]: "01101111",
    [112]: "01110000",
    [113]: "01110001",
    [114]: "01110010",
    [115]: "01110011",
    [116]: "01110100",
    [117]: "01110101",
    [118]: "01110110",
    [119]: "01110111",
    [120]: "01111000",
    [121]: "01111001",
    [122]: "01111010",
    [123]: "01111011",
    [124]: "01111100",
    [125]: "01111101",
    [126]: "01111110",
    [127]: "01111111",
    [-128]: "10000000",
    [-127]: "10000001",
    [-126]: "10000010",
    [-125]: "10000011",
    [-124]: "10000100",
    [-123]: "10000101",
    [-122]: "10000110",
    [-121]: "10000111",
    [-120]: "10001000",
    [-119]: "10001001",
    [-118]: "10001010",
    [-117]: "10001011",
    [-116]: "10001100",
    [-115]: "10001101",
    [-114]: "10001110",
    [-113]: "10001111",
    [-112]: "10010000",
    [-111]: "10010001",
    [-110]: "10010010",
    [-109]: "10010011",
    [-108]: "10010100",
    [-107]: "10010101",
    [-106]: "10010110",
    [-105]: "10010111",
    [-104]: "10011000",
    [-103]: "10011001",
    [-102]: "10011010",
    [-101]: "10011011",
    [-100]: "10011100",
    [-99]: "10011101",
    [-98]: "10011110",
    [-97]: "10011111",
    [-96]: "10100000",
    [-95]: "10100001",
    [-94]: "10100010",
    [-93]: "10100011",
    [-92]: "10100100",
    [-91]: "10100101",
    [-90]: "10100110",
    [-89]: "10100111",
    [-88]: "10101000",
    [-87]: "10101001",
    [-86]: "10101010",
    [-85]: "10101011",
    [-84]: "10101100",
    [-83]: "10101101",
    [-82]: "10101110",
    [-81]: "10101111",
    [-80]: "10110000",
    [-79]: "10110001",
    [-78]: "10110010",
    [-77]: "10110011",
    [-76]: "10110100",
    [-75]: "10110101",
    [-74]: "10110110",
    [-73]: "10110111",
    [-72]: "10111000",
    [-71]: "10111001",
    [-70]: "10111010",
    [-69]: "10111011",
    [-68]: "10111100",
    [-67]: "10111101",
    [-66]: "10111110",
    [-65]: "10111111",
    [-64]: "11000000",
    [-63]: "11000001",
    [-62]: "11000010",
    [-61]: "11000011",
    [-60]: "11000100",
    [-59]: "11000101",
    [-58]: "11000110",
    [-57]: "11000111",
    [-56]: "11001000",
    [-55]: "11001001",
    [-54]: "11001010",
    [-53]: "11001011",
    [-52]: "11001100",
    [-51]: "11001101",
    [-50]: "11001110",
    [-49]: "11001111",
    [-48]: "11010000",
    [-47]: "11010001",
    [-46]: "11010010",
    [-45]: "11010011",
    [-44]: "11010100",
    [-43]: "11010101",
    [-42]: "11010110",
    [-41]: "11010111",
    [-40]: "11011000",
    [-39]: "11011001",
    [-38]: "11011010",
    [-37]: "11011011",
    [-36]: "11011100",
    [-35]: "11011101",
    [-34]: "11011110",
    [-33]: "11011111",
    [-32]: "11100000",
    [-31]: "11100001",
    [-30]: "11100010",
    [-29]: "11100011",
    [-28]: "11100100",
    [-27]: "11100101",
    [-26]: "11100110",
    [-25]: "11100111",
    [-24]: "11101000",
    [-23]: "11101001",
    [-22]: "11101010",
    [-21]: "11101011",
    [-20]: "11101100",
    [-19]: "11101101",
    [-18]: "11101110",
    [-17]: "11101111",
    [-16]: "11110000",
    [-15]: "11110001",
    [-14]: "11110010",
    [-13]: "11110011",
    [-12]: "11110100",
    [-11]: "11110101",
    [-10]: "11110110",
    [-9]: "11110111",
    [-8]: "11111000",
    [-7]: "11111001",
    [-6]: "11111010",
    [-5]: "11111011",
    [-4]: "11111100",
    [-3]: "11111101",
    [-2]: "11111110",
    [-1]: "11111111"
}
type DecimalMap = AsIntersect<{[N in Byte]: {[I in BinaryMap[N]]: N}}[Byte]>;

type Bit = "0" | "1";

type Stringable = string | number | bigint | boolean | null | undefined;
type Split<S extends string> = S extends `${infer S1}${infer S2}` ? [S1, ...Split<S2>] : [];
type Join<S> = 
    S extends [infer S1 extends Stringable, ...infer S2 extends Stringable[]] ? 
        `${S1}${Join<S2>}` 
    : "";

type Binary<B extends Byte> = Split<BinaryMap[B]>;
type Decimal<B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]> = DecimalMap[Join<B>];

type And<A extends Bit, B> =
    A extends "0" ? A : B;
type Or<A extends Bit, B> =
    A extends "1" ? A : B;
type Not<A extends Bit> =
    A extends "1" ? "0" : "1";
type Xor<A extends Bit, B extends Bit> =
    A extends B ? "0" : "1";

type Zip<A extends Bit[], B extends Bit[]> = 
    A extends [...infer A1 extends Bit[], infer A2 extends Bit] ? 
        B extends [...infer B1 extends Bit[], infer B2 extends Bit] ?
            [...Zip<A1, B1>, [A2, B2]]
        : [...Zip<A1, []>, [A2, "0"]]
    : B extends [...infer B1 extends Bit[], infer B2 extends Bit] ?
        [...Zip<[], B1>, ["0", B2]]
    : [];

namespace Arb {
    export type AndN<A extends Bit[], B extends Bit[]> =
        A extends [...infer A1 extends Bit[], infer A2 extends Bit] ? 
            B extends [...infer B1 extends Bit[], infer B2 extends Bit] ?
                [...AndN<A1, B1>, And<A2, B2>]
            : [...AndN<A1, []>, And<A2, "0">]
        : B extends [...infer B1 extends Bit[], infer B2 extends Bit] ?
            [...AndN<[], B1>, And<"0", B2>]
        : [];

    export type OrN<A extends Bit[], B extends Bit[]> =
        A extends [...infer A1 extends Bit[], infer A2 extends Bit] ? 
            B extends [...infer B1 extends Bit[], infer B2 extends Bit] ?
                [...OrN<A1, B1>, Or<A2, B2>]
            : [...OrN<A1, []>, Or<A2, "0">]
        : B extends [...infer B1 extends Bit[], infer B2 extends Bit] ?
            [...OrN<[], B1>, Or<"0", B2>]
        : [];

    export type NotN<A extends Bit[]> =
        A extends [infer A1 extends Bit, ...infer A2 extends Bit[]] ?
            [Not<A1>, ...NotN<A2>]
        : [];

    export type XorN<A extends Bit[], B extends Bit[]> =
        A extends [...infer A1 extends Bit[], infer A2 extends Bit] ? 
            B extends [...infer B1 extends Bit[], infer B2 extends Bit] ?
                [...XorN<A1, B1>, Xor<A2, B2>]
            : [...XorN<A1, []>, Xor<A2, "0">]
        : B extends [...infer B1 extends Bit[], infer B2 extends Bit] ?
            [...XorN<[], B1>, Xor<"0", B2>]
        : [];
    
    export type Shl<A extends Bit[]> =
        A extends [Bit, ...infer A2 extends Bit[]] ? [...A2, "0"] : [];
    export type ShrU<A extends Bit[]> =
        A extends [...infer A1 extends Bit[], Bit] ? ["0", ...A1] : [];
    export type Shr<A extends Bit[]> =
        A extends [infer A1, ...infer A2 extends Bit[], Bit] ? 
            [A1, A1, ...A2]
        : A extends [infer A1] ? 
            [A1]
        : [];
        
    export type Add<A extends Bit[], B extends Bit[]> =
        "1" extends B[number] ? 
            Add<XorN<A, B>, Shl<AndN<A, B>>> 
        : A;
    
    export type NotA<V extends Bit[], A extends unknown[]> =
        A extends [...infer A1, unknown] ? 
            V extends [...infer V1 extends Bit[], infer V2 extends Bit] ?
                [...NotA<V1, A1>, Not<V2>]
            : [...NotA<[], A1>, "1"]
        : NotN<V>;

    export type Neg<A extends Bit[]> = Add<NotN<A>, ["1"]>;
    export type NegA<V extends Bit[], A extends unknown[]> = Add<NotA<V, A>, ["1"]>;
    
    export type Sub<A extends Bit[], B extends Bit[]> =
        Add<A, NegA<B, A>>;
    
    export type Incr<A extends Bit[]> = Add<A, ["1"]>;
    export type Decr<A extends Bit[]> = Sub<A, ["1"]>;

    export type IsNeg<A extends Bit[]> = 
        A extends ["1", ...Bit[]] ? true : false;
    export type IsZero<A extends Bit[]> =
        "1" extends A[number] ? false : true;
    export type IsPos<A extends Bit[]> =
        A extends ["0", ...infer A2] ?
            "1" extends A2[number] ?
                true
            : false
        : false;

    export type Fill<A extends Bit[], B extends Bit> =
        A extends [Bit, ...infer A2 extends Bit[]] ? [B, Fill<A2, B>] : [];
    
    export type Mul<A extends Bit[], B extends Bit[]> =
        IsZero<B> extends true ? B
        : IsZero<A> extends true ? A
        : IsZero<AndN<B, ["1"]>> extends true ?
            Mul<Shl<A>, ShrU<B>>
        : Add<Mul<Shl<A>, ShrU<B>>, A>;
}

namespace ArbS {
    export type And<A extends string, B extends string> = Join<Arb.AndN<Split<A>, Split<B>>>;
    export type Or<A extends string, B extends string> = Join<Arb.OrN<Split<A>, Split<B>>>;
    export type Not<A extends string> = Join<Arb.NotN<Split<A>>>;
    export type Xor<A extends string, B extends string> = Join<Arb.XorN<Split<A>, Split<B>>>;
    export type Shl<A extends string> = Join<Arb.Shl<Split<A>>>;
    export type ShrU<A extends string> = Join<Arb.ShrU<Split<A>>>;
    export type Shr<A extends string> = Join<Arb.Shr<Split<A>>>;
    export type Add<A extends string, B extends string> = Join<Arb.Add<Split<A>, Split<B>>>;
    export type NotA<V extends string, A extends string> = Join<Arb.NotA<Split<V>, Split<A>>>;
    export type Neg<A extends string> =  Join<Arb.Neg<Split<A>>>;
    export type NegA<V extends string, A extends string> =  Join<Arb.NegA<Split<V>, Split<A>>>;
    export type Sub<A extends string, B extends string> = Join<Arb.Sub<Split<A>, Split<B>>>;
    export type Incr<A extends string> =  Join<Arb.Incr<Split<A>>>;
    export type Decr<A extends string> =  Join<Arb.Decr<Split<A>>>;
    export type IsNeg<A extends string> = Arb.IsNeg<Split<A>>;
    export type IsZero<A extends string> = Arb.IsZero<Split<A>>;
    export type IsPos<A extends string> = Arb.IsPos<Split<A>>;
    export type Fill<A extends string, B extends Bit> = Join<Arb.Fill<Split<A>, B>>;
    export type Mul<A extends string, B extends string> = Join<Arb.Mul<Split<A>, Split<B>>>;
}

type ByteAnd<A extends Byte, B extends Byte> = Arb.AndN<Binary<A>, Binary<B>>;
type ByteOr<A extends Byte, B extends Byte> = Arb.OrN<Binary<A>, Binary<B>>;
type ByteXor<A extends Byte, B extends Byte> = Arb.XorN<Binary<A>, Binary<B>>;
type ByteNot<A extends Byte> = Arb.NotN<Binary<A>>;

type ByteAdd<A extends Byte, B extends Byte> = Arb.Add<Binary<A>, Binary<B>>;
type ByteMul<A extends Byte, B extends Byte> = Arb.Mul<Binary<A>, Binary<B>>;

let a: Decimal<ByteAnd<15, 1>>;
let y: Decimal<ByteMul<14, -1>>;

let X: ArbS.Decr<ArbS.Decr<ArbS.Decr<"0011">>>;
let Y: ArbS.Add<"0011", "11">;
let Z: ArbS.NotA<"1", "0011">;
let W: ArbS.NegA<"1", "0011">;
let V: ArbS.Sub<"0011", "1">;
let U: ArbS.Sub<"1", "11">;
let T: ArbS.Add<"0001", "0111">;
let S: ArbS.Add<"0111", "0111">;

type Tuple<T, N extends Bit[]> =
    Arb.IsZero<N> extends true ? [] : [T, ...Tuple<T, Arb.Decr<N>>];
type TupleS<T, N extends string> = Tuple<T, Split<N>>;

let R: TupleS<number, "100000">;

export {};