window.BENCHMARK_DATA = {
  "lastUpdate": 1767337139918,
  "repoUrl": "https://github.com/abhishekvijay/CppMicroServices",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "113473781+tcormackMW@users.noreply.github.com",
            "name": "tcormackMW",
            "username": "tcormackMW"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7aff2756a2c5a3c14a1eb7ce4f841ffe7d876e84",
          "message": "Increase floating point precision for anys (#1221)\n\n* up floatig point precision\n\n* use scope guard\n\n* use const\n\n* dave comments\n\n---------\n\nCo-authored-by: Toby Cormack <tcormack@vdi-ah2ddp-086.dhcp.mathworks.com>",
          "timestamp": "2025-12-17T08:36:51-05:00",
          "tree_id": "9bdfd2e67d9861c6df75055b3bc62eaf2b41b988",
          "url": "https://github.com/abhishekvijay/CppMicroServices/commit/7aff2756a2c5a3c14a1eb7ce4f841ffe7d876e84"
        },
        "date": 1767337133672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 13802.478460423874,
            "unit": "ns/iter",
            "extra": "iterations: 62095\ncpu: 14091.3116998148 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 51855.53000000071,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 215158.97300158214,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 219196.66490206457 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 877212.0758482853,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 904441.1177644711 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 3384761.2334803343,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 3510462.5550660794 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 13500839.393939476,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 13731060.606060605 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 31381.48794821604,
            "unit": "ns/iter",
            "extra": "iterations: 23482\ncpu: 31939.35780597905 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 128863.8766519851,
            "unit": "ns/iter",
            "extra": "iterations: 6810\ncpu: 130781.93832599118 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 509448.4743412048,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 520110.9570041609 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 2026621.7821782504,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2088490.099009901 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 8174133.928571673,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 8231026.785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 31993975.00000063,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 32552083.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 97144.59488047412,
            "unit": "ns/iter",
            "extra": "iterations: 9454\ncpu: 99164.37486778083 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 380185.30734632857,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 382621.18940529734 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 1552308.0789946152,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1570915.619389587 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 5958770.000000018,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6093750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 24586378.787878808,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 25094696.96969697 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 97829560.00000057,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 100000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 315539.44733680505,
            "unit": "ns/iter",
            "extra": "iterations: 2497\ncpu: 325390.4685622747 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 1284660.1085481704,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1314450.474898236 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 4983258.503401364,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 5102040.816326531 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 20383218.60465118,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 20712209.30232558 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 82747975.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 83333333.33333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 322763766.66666687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 333333333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 1116828.1603288804,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 1140159.3011305241 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 4312902.222222221,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 4427083.333333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 17483971.999999993,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 18125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 67044399.99999996,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 277348866.6666668,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 1123195200.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1140625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 3444969.958847736,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3600823.0452674897 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 14482954.545454545,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 15016233.766233766 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 51402960,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 54687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 221940275.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 230468750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 886199200.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 906250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 4505869500.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 13757.07439595597,
            "unit": "ns/iter",
            "extra": "iterations: 64896\ncpu: 13964.651134122289 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 145048.71000000217,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 146875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 557733.7559429463,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 561278.3940834654 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3178116.011235975,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 3204002.808988764 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 8894124.999999983,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8906250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 45454902.70270272,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 45608108.10810811 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 31545.181359792292,
            "unit": "ns/iter",
            "extra": "iterations: 24592\ncpu: 31768.461288223814 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 322014.53056560614,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 324342.9822890878 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1237030.4000000097,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 1234375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 4944282.4786324715,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 5008012.820512821 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 27053654.02298846,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 27298850.574712645 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 59212539.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 59375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 97654.9232536284,
            "unit": "ns/iter",
            "extra": "iterations: 9577\ncpu: 99522.29299363057 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 573925.7123002076,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 586344.6838082002 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 2888416.9934640387,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2927559.9128540307 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 11327324.000000019,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 11406250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 43393358.33333325,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 43619791.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 214137210.00000018,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 217187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 316222.5575853856,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 316471.4058776807 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 1675158.8471849898,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1696548.257372654 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 5837453.000000013,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5781250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 27714192.30769235,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 28044871.794871796 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 122885892.3076922,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 123798076.92307693 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 418990733.3333321,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 421875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 1111727.5428571433,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 4445004.891304345,
            "unit": "ns/iter",
            "extra": "iterations: 184\ncpu: 4585597.826086956 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 19722694.54545455,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 20170454.545454547 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 72583280.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 73437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 294342466.66666657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 302083333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 1102079700.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1125000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 3457897.1428571446,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3571428.5714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 14907414.606741576,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 15273876.404494382 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 54315378.571428545,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 55803571.428571425 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 239240159.99999982,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 246875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 883217499.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 921875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 4496692500,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 1093.2110937499574,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 1820.444214682345,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1799.6667854167727 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 4558.938523979163,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4652.615498145427 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 18078.355881845066,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 18031.649765511822 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 58509.33035714791,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 58593.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 235301.4060930818,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 235395.04519584868 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 4345.978749999802,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 7299.330357142253,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7393.973214285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 18323.810034016606,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 18415.342994133876 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 64163.276785710164,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 232273.01640436592,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 230164.04419149648 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 943448.3266399052,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 941265.0602409638 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 18220.409065240598,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 18415.301888182286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 32675.038672479084,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 32227.066047907 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 78856.88616069737,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 80217.63392857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 259976.62239095513,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 260910.81593927892 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 953190.8969210718,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 941265.0602409638 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 3790714.9732617005,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3843582.887700535 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 70460.15178571809,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 71149.55357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 118652.62500002416,
            "unit": "ns/iter",
            "extra": "iterations: 6400\ncpu: 119628.90625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 297063.23155214114,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 298187.0229007634 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1138566.0937502705,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1123046.875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 3850782.352941299,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3843582.887700535 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 15058966.666669626,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 14930555.555555556 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 305393.16964289953,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 306919.64285714284 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 515570.900000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 1329571.8875499927,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1349146.5863453816 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 4691476.510067069,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 4614093.959731543 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 16606817.073169423,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16768292.68292683 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 68515254.54544571,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 68181818.18181819 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 1235117.6785715877,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1227678.5714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 2109534.7826086134,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2128623.188405797 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 5528166.964286437,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 5440848.214285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 20900970.588239517,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20680147.05882353 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 69568818.18181998,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 69602272.72727273 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 284503599.9999936,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 1831.3111674606434,
            "unit": "ns/iter",
            "extra": "iterations: 380615\ncpu: 5336.757615963637 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 7168.1463465334655,
            "unit": "ns/iter",
            "extra": "iterations: 96620\ncpu: 26036.276133305735 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 29311.54263765837,
            "unit": "ns/iter",
            "extra": "iterations: 23946\ncpu: 116799.25666082017 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 135149.60660138456,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 557714.4502014968 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 780662.8062357929,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 2714365.2561247214 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 6470683.018867943,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 15182783.018867925 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 2247.2139249233132,
            "unit": "ns/iter",
            "extra": "iterations: 312016\ncpu: 6510.082816265833 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 8407.264455686678,
            "unit": "ns/iter",
            "extra": "iterations: 82649\ncpu: 36865.237328945295 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 35747.32957454979,
            "unit": "ns/iter",
            "extra": "iterations: 19510\ncpu: 200217.83700666326 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 181312.3016904398,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 1093140.4421326397 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1278317.550274129,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 5798674.588665448 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 13686954.000000041,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 35625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 3861.2426213155672,
            "unit": "ns/iter",
            "extra": "iterations: 183129\ncpu: 10579.9736797558 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 13185.058710063457,
            "unit": "ns/iter",
            "extra": "iterations: 52887\ncpu: 79178.24796263732 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 57940.00166150179,
            "unit": "ns/iter",
            "extra": "iterations: 12037\ncpu: 524424.6905375094 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 357374.65508426575,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 3177695.45222279 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3359525.4807692682,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 18479567.307692308 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 42185658.8235293,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 116727941.1764706 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 10454.070818950077,
            "unit": "ns/iter",
            "extra": "iterations: 66903\ncpu: 27091.4607715648 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 32393.691936083378,
            "unit": "ns/iter",
            "extra": "iterations: 21528\ncpu: 245320.04830917873 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 148754.25961334945,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 1805821.1174845975 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1056407.1856287639,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 11204154.191616766 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 11851540.677966159,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 67796610.16949153 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 154746200.00000006,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 434375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 61358.33844536163,
            "unit": "ns/iter",
            "extra": "iterations: 11411\ncpu: 147883.62106739113 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 202991.97907585138,
            "unit": "ns/iter",
            "extra": "iterations: 3441\ncpu: 1117044.4638186574 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 877685.2867830448,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 7754052.369077307 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 6313957.894736857,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 48519736.84210526 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 54868061.53846155,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 284855769.2307692 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 635331099.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1781250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 291510.9190556493,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 698250.4215851602 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 986163.5460992898,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 4853723.404255319 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 5236642.968750003,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 33691406.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 29702412.50000003,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 198567708.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 231168866.66666687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1145833333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2668224899.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7343750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 3823.8605883511846,
            "unit": "ns/iter",
            "extra": "iterations: 183428\ncpu: 4173.981071592123 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 15282.951252770854,
            "unit": "ns/iter",
            "extra": "iterations: 46936\ncpu: 15646.30560763593 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 59743.87405886178,
            "unit": "ns/iter",
            "extra": "iterations: 11688\ncpu: 60157.854209445584 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 250632.95138888966,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 254991.31944444444 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1111573.2919254652,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1116071.4285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 3941326.7045454537,
            "unit": "ns/iter",
            "extra": "iterations: 176\ncpu: 3906250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 3897.979701577107,
            "unit": "ns/iter",
            "extra": "iterations: 178142\ncpu: 4210.124507415433 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 15324.096709203026,
            "unit": "ns/iter",
            "extra": "iterations: 44670\ncpu: 15390.642489366464 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 61871.28553549083,
            "unit": "ns/iter",
            "extra": "iterations: 11186\ncpu: 62857.58984444842 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 258931.94645441294,
            "unit": "ns/iter",
            "extra": "iterations: 2764\ncpu: 260039.7973950796 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1115890.5743740785,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1104565.5375552282 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 4019731.6091954024,
            "unit": "ns/iter",
            "extra": "iterations: 174\ncpu: 3951149.425287356 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 4393.0967729831145,
            "unit": "ns/iter",
            "extra": "iterations: 159621\ncpu: 4698.62987952713 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 17265.956236865717,
            "unit": "ns/iter",
            "extra": "iterations: 40445\ncpu: 17771.04710100136 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 69667.94149619502,
            "unit": "ns/iter",
            "extra": "iterations: 10119\ncpu: 71029.74602233422 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 283831.54497781367,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 283632.51311012503 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 1227461.954624782,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1227094.2408376962 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 4638810.526315791,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 4625822.368421053 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 6351.224312326575,
            "unit": "ns/iter",
            "extra": "iterations: 109245\ncpu: 6722.275619021466 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 25021.601304873748,
            "unit": "ns/iter",
            "extra": "iterations: 28202\ncpu: 25485.78115027303 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 100665.86912654991,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 101344.04727587201 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 411070.4678362573,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 411184.2105263158 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 1658721.1678832108,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 1672749.3917274938 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 6686188.679245284,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 6780660.377358491 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 29872.290786139445,
            "unit": "ns/iter",
            "extra": "iterations: 23660\ncpu: 30378.275570583264 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 120218.99878324564,
            "unit": "ns/iter",
            "extra": "iterations: 5753\ncpu: 122218.84234312533 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 493148.4276729574,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 491352.2012578616 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 2099483.918128656,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2101608.187134503 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 9204858.024691354,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 9259259.25925926 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 37022673.68421052,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 37006578.94736842 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 136580.8795040692,
            "unit": "ns/iter",
            "extra": "iterations: 5162\ncpu: 136211.73963580007 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 555773.9843750001,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 549316.40625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 2275678.2747603836,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2246405.7507987223 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 9546177.631578952,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9457236.842105264 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 40478847.058823526,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 40441176.47058824 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 161641800,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 164062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 2693.2334881112697,
            "unit": "ns/iter",
            "extra": "iterations: 257799\ncpu: 4121.427934165765 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 3875.497922411614,
            "unit": "ns/iter",
            "extra": "iterations: 179295\ncpu: 5490.253492846984 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 3726.338415109449,
            "unit": "ns/iter",
            "extra": "iterations: 188189\ncpu: 5313.806864375708 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 3809.2890625003,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 3782.708245162861,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 3807.11160714396,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 3810.6969866090267,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3749.3024553571427 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 3909.2952008929724,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 3937.445312501048,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 4044.3949207225996,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 4178.6856791569635,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4143.413328833335 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 4292.546074757219,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4237.581813579547 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 4337.82107686472,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4331.75029832576 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 4402.816249998409,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 4631.071497927583,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 15476.993852704303,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 16008.57808670497 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 9304374.666668689,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 29493133.333346575,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29947916.666666668 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 16007.668046120012,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 16008.57808670497 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 61698739.99997435,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 60937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 157031233.33332768,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 156250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 14008.98593749389,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 13916.015625 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 2401924.3750004196,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2392578.125 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 7015880.35714248,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6975446.428571428 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 325.9894728109765,
            "unit": "ns/iter",
            "extra": "iterations: 2133333\ncpu: 322.26567535401176 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 937.8341348956966,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 2123.561249999284,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2099.609375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 3336.232556613068,
            "unit": "ns/iter",
            "extra": "iterations: 213333\ncpu: 3369.145889290452 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 4522.73324573033,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4551.471682968352 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 5416.768999998567,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 6036.173214287796,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 4474.687829730918,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 6273.983035713724,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 9689.072816638502,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 13206.144642854919,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13392.857142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 16682.286934951437,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 16497.041274829964 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 19241.952160291,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 19252.40403932178 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 21070.29687499562,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 20996.09375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 473.27608778483346,
            "unit": "ns/iter",
            "extra": "iterations: 1493333\ncpu: 470.8427390273971 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1280.7564818052517,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1286.9692915315663 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 2855.359216357491,
            "unit": "ns/iter",
            "extra": "iterations: 248889\ncpu: 2887.8335322171733 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 5030.105357142084,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 6683.349999998914,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 7913.998883926712,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 8684.12016017839,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 307.6637499999281,
            "unit": "ns/iter",
            "extra": "iterations: 2240000\ncpu: 306.91964285714283 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1108.573749999664,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 2664.3439621447365,
            "unit": "ns/iter",
            "extra": "iterations: 263529\ncpu: 2668.1124278542397 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 4860.462509340721,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 6459.666071427656,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 7673.638392858046,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 8508.425408811316,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 217694.29017160705,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 234009.36037441497 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 213174.2673992675,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 238476.80097680097 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 426.2691960689491,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 618.6885714283466,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 268.06868607458057,
            "unit": "ns/iter",
            "extra": "iterations: 2635294\ncpu: 278.6690972620133 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 310.3635714286465,
            "unit": "ns/iter",
            "extra": "iterations: 2240000\ncpu: 313.8950892857143 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 172.21350706792416,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 172.64231066801187 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 288.9561165644754,
            "unit": "ns/iter",
            "extra": "iterations: 2488889\ncpu: 288.783469250738 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 117.97441071426616,
            "unit": "ns/iter",
            "extra": "iterations: 5600000\ncpu: 117.1875 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 154.00506008906623,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 156.94753763627065 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 1548.6584821431393,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1534.5982142857142 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 684.712410714334,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 791.7311383930529,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 698.9356026788788,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 686.1897321428501,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 529.3405000002167,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 544.5905999999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 509.5645000001241,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 515.625 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/1",
            "value": 122.21385714285914,
            "unit": "ns/iter",
            "extra": "iterations: 5600000\ncpu: 122.76785714285714 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/8",
            "value": 1003.5070520056381,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1004.4638372929297 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/64",
            "value": 7948.700892857882,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/512",
            "value": 63670.58928568829,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/4096",
            "value": 510053.599999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531250 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/10000",
            "value": 1242786.6071423718,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1255580.357142857 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/OpenBundleTracker/manual_time",
            "value": 1614.201175274476,
            "unit": "ns/iter",
            "extra": "iterations: 434964\ncpu: 2155.350787651392 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerGetObject/manual_time",
            "value": 96.26726660603302,
            "unit": "ns/iter",
            "extra": "iterations: 8170822\ncpu: 131.9481687399383 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerRemoveMethod/manual_time",
            "value": 188.62841905555928,
            "unit": "ns/iter",
            "extra": "iterations: 3773011\ncpu: 13140.20155255312 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTracker/manual_time",
            "value": 394.3995166913723,
            "unit": "ns/iter",
            "extra": "iterations: 1733029\ncpu: 1695.009142951445 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/1/manual_time",
            "value": 397.88619190527356,
            "unit": "ns/iter",
            "extra": "iterations: 1758627\ncpu: 1705.876231855874 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/128/manual_time",
            "value": 399.16368309862867,
            "unit": "ns/iter",
            "extra": "iterations: 1710476\ncpu: 1717.358209059934 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/16384/manual_time",
            "value": 403.7401068836158,
            "unit": "ns/iter",
            "extra": "iterations: 1723293\ncpu: 1813.3886692512533 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/500000/manual_time",
            "value": 407.9714149379464,
            "unit": "ns/iter",
            "extra": "iterations: 1675700\ncpu: 1995.4347436892044 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/StartBundle/manual_time",
            "value": 6828.682953618308,
            "unit": "ns/iter",
            "extra": "iterations: 101963\ncpu: 10880.172219334465 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/0/manual_time",
            "value": 6462.985493249606,
            "unit": "ns/iter",
            "extra": "iterations: 107674\ncpu: 10448.204766238832 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/1/manual_time",
            "value": 8367.292685221522,
            "unit": "ns/iter",
            "extra": "iterations: 85088\ncpu: 13772.506111320045 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/4/manual_time",
            "value": 9270.832500964681,
            "unit": "ns/iter",
            "extra": "iterations: 75087\ncpu: 15398.804053964068 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/16/manual_time",
            "value": 16539.779318151777,
            "unit": "ns/iter",
            "extra": "iterations: 42414\ncpu: 27997.830904889895 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/64/manual_time",
            "value": 43262.2160664821,
            "unit": "ns/iter",
            "extra": "iterations: 16245\ncpu: 75023.08402585411 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/256/manual_time",
            "value": 159114.3018782524,
            "unit": "ns/iter",
            "extra": "iterations: 4419\ncpu: 279333.5596288753 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/1000/manual_time",
            "value": 682820.077972709,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 1218323.5867446393 ns\nthreads: 1"
          },
          {
            "name": "GetDSServiceFixture/GetService",
            "value": 7226.3749999988495,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "GetConfigurationTest/createConfiguration",
            "value": 42122.01674107011,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 14125.279017857143 ns\nthreads: 1"
          },
          {
            "name": "GetConfigurationTest/updateConfigurationUsedByService",
            "value": 55674.02799999854,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 7343.75 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}