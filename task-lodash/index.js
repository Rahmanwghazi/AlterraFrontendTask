const lodash = require('lodash');

const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena","omen"];

console.log("---a---");
let belum_mengumpulkan = lodash.difference(anggota_kelas, mengumpulkan_tugas);
console.log(belum_mengumpulkan);

console.log("\n---b---");
let kelompok = lodash.chunk(anggota_kelas,2);
console.log(kelompok);

console.log("\n---c---");
let anggota_kelas_join = lodash.join(anggota_kelas, '-')
console.log(anggota_kelas_join);

console.log("\n---d---");
let anggota_kelas_slice = lodash.slice(anggota_kelas,1)
console.log(anggota_kelas_slice);

console.log("\n---e---");
let anggota_kelas_reverse = lodash.reverse(anggota_kelas);
console.log(anggota_kelas_reverse);
