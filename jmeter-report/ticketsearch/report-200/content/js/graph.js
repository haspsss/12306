/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 24.0, "minX": 0.0, "maxY": 439.0, "series": [{"data": [[0.0, 24.0], [0.1, 27.0], [0.2, 28.0], [0.3, 28.0], [0.4, 29.0], [0.5, 30.0], [0.6, 31.0], [0.7, 32.0], [0.8, 33.0], [0.9, 34.0], [1.0, 34.0], [1.1, 35.0], [1.2, 36.0], [1.3, 37.0], [1.4, 37.0], [1.5, 38.0], [1.6, 39.0], [1.7, 39.0], [1.8, 40.0], [1.9, 41.0], [2.0, 42.0], [2.1, 43.0], [2.2, 44.0], [2.3, 44.0], [2.4, 45.0], [2.5, 45.0], [2.6, 46.0], [2.7, 46.0], [2.8, 47.0], [2.9, 47.0], [3.0, 48.0], [3.1, 49.0], [3.2, 49.0], [3.3, 50.0], [3.4, 51.0], [3.5, 51.0], [3.6, 53.0], [3.7, 55.0], [3.8, 57.0], [3.9, 59.0], [4.0, 60.0], [4.1, 61.0], [4.2, 62.0], [4.3, 63.0], [4.4, 64.0], [4.5, 64.0], [4.6, 65.0], [4.7, 66.0], [4.8, 67.0], [4.9, 68.0], [5.0, 68.0], [5.1, 69.0], [5.2, 70.0], [5.3, 70.0], [5.4, 71.0], [5.5, 72.0], [5.6, 72.0], [5.7, 73.0], [5.8, 74.0], [5.9, 74.0], [6.0, 75.0], [6.1, 76.0], [6.2, 77.0], [6.3, 77.0], [6.4, 78.0], [6.5, 79.0], [6.6, 79.0], [6.7, 80.0], [6.8, 81.0], [6.9, 82.0], [7.0, 83.0], [7.1, 84.0], [7.2, 85.0], [7.3, 85.0], [7.4, 86.0], [7.5, 87.0], [7.6, 88.0], [7.7, 89.0], [7.8, 89.0], [7.9, 90.0], [8.0, 91.0], [8.1, 91.0], [8.2, 92.0], [8.3, 92.0], [8.4, 93.0], [8.5, 93.0], [8.6, 94.0], [8.7, 94.0], [8.8, 95.0], [8.9, 95.0], [9.0, 96.0], [9.1, 96.0], [9.2, 97.0], [9.3, 97.0], [9.4, 98.0], [9.5, 98.0], [9.6, 99.0], [9.7, 99.0], [9.8, 100.0], [9.9, 100.0], [10.0, 101.0], [10.1, 101.0], [10.2, 101.0], [10.3, 102.0], [10.4, 102.0], [10.5, 103.0], [10.6, 104.0], [10.7, 104.0], [10.8, 105.0], [10.9, 106.0], [11.0, 106.0], [11.1, 107.0], [11.2, 108.0], [11.3, 109.0], [11.4, 110.0], [11.5, 111.0], [11.6, 112.0], [11.7, 113.0], [11.8, 114.0], [11.9, 115.0], [12.0, 116.0], [12.1, 118.0], [12.2, 119.0], [12.3, 120.0], [12.4, 122.0], [12.5, 123.0], [12.6, 125.0], [12.7, 127.0], [12.8, 129.0], [12.9, 132.0], [13.0, 134.0], [13.1, 136.0], [13.2, 139.0], [13.3, 141.0], [13.4, 142.0], [13.5, 144.0], [13.6, 145.0], [13.7, 147.0], [13.8, 148.0], [13.9, 149.0], [14.0, 150.0], [14.1, 152.0], [14.2, 153.0], [14.3, 154.0], [14.4, 155.0], [14.5, 156.0], [14.6, 158.0], [14.7, 159.0], [14.8, 160.0], [14.9, 161.0], [15.0, 162.0], [15.1, 163.0], [15.2, 164.0], [15.3, 165.0], [15.4, 166.0], [15.5, 166.0], [15.6, 167.0], [15.7, 168.0], [15.8, 169.0], [15.9, 169.0], [16.0, 170.0], [16.1, 171.0], [16.2, 172.0], [16.3, 173.0], [16.4, 173.0], [16.5, 174.0], [16.6, 175.0], [16.7, 175.0], [16.8, 176.0], [16.9, 177.0], [17.0, 177.0], [17.1, 177.0], [17.2, 178.0], [17.3, 179.0], [17.4, 179.0], [17.5, 180.0], [17.6, 180.0], [17.7, 181.0], [17.8, 181.0], [17.9, 182.0], [18.0, 182.0], [18.1, 183.0], [18.2, 183.0], [18.3, 183.0], [18.4, 184.0], [18.5, 184.0], [18.6, 185.0], [18.7, 185.0], [18.8, 185.0], [18.9, 186.0], [19.0, 186.0], [19.1, 187.0], [19.2, 187.0], [19.3, 187.0], [19.4, 188.0], [19.5, 188.0], [19.6, 188.0], [19.7, 189.0], [19.8, 189.0], [19.9, 190.0], [20.0, 190.0], [20.1, 190.0], [20.2, 191.0], [20.3, 191.0], [20.4, 192.0], [20.5, 192.0], [20.6, 192.0], [20.7, 193.0], [20.8, 194.0], [20.9, 194.0], [21.0, 195.0], [21.1, 195.0], [21.2, 196.0], [21.3, 196.0], [21.4, 197.0], [21.5, 198.0], [21.6, 198.0], [21.7, 200.0], [21.8, 200.0], [21.9, 202.0], [22.0, 203.0], [22.1, 205.0], [22.2, 206.0], [22.3, 207.0], [22.4, 208.0], [22.5, 209.0], [22.6, 211.0], [22.7, 212.0], [22.8, 212.0], [22.9, 213.0], [23.0, 214.0], [23.1, 215.0], [23.2, 216.0], [23.3, 216.0], [23.4, 217.0], [23.5, 217.0], [23.6, 218.0], [23.7, 219.0], [23.8, 219.0], [23.9, 220.0], [24.0, 220.0], [24.1, 221.0], [24.2, 221.0], [24.3, 222.0], [24.4, 222.0], [24.5, 223.0], [24.6, 223.0], [24.7, 224.0], [24.8, 224.0], [24.9, 224.0], [25.0, 225.0], [25.1, 225.0], [25.2, 226.0], [25.3, 226.0], [25.4, 226.0], [25.5, 227.0], [25.6, 227.0], [25.7, 227.0], [25.8, 228.0], [25.9, 228.0], [26.0, 228.0], [26.1, 229.0], [26.2, 229.0], [26.3, 229.0], [26.4, 230.0], [26.5, 230.0], [26.6, 230.0], [26.7, 231.0], [26.8, 231.0], [26.9, 231.0], [27.0, 232.0], [27.1, 232.0], [27.2, 232.0], [27.3, 233.0], [27.4, 233.0], [27.5, 234.0], [27.6, 234.0], [27.7, 234.0], [27.8, 234.0], [27.9, 235.0], [28.0, 235.0], [28.1, 235.0], [28.2, 236.0], [28.3, 236.0], [28.4, 236.0], [28.5, 236.0], [28.6, 237.0], [28.7, 237.0], [28.8, 237.0], [28.9, 237.0], [29.0, 238.0], [29.1, 238.0], [29.2, 238.0], [29.3, 238.0], [29.4, 238.0], [29.5, 239.0], [29.6, 239.0], [29.7, 239.0], [29.8, 239.0], [29.9, 239.0], [30.0, 240.0], [30.1, 240.0], [30.2, 240.0], [30.3, 240.0], [30.4, 240.0], [30.5, 240.0], [30.6, 241.0], [30.7, 241.0], [30.8, 241.0], [30.9, 241.0], [31.0, 241.0], [31.1, 241.0], [31.2, 241.0], [31.3, 242.0], [31.4, 242.0], [31.5, 242.0], [31.6, 242.0], [31.7, 242.0], [31.8, 242.0], [31.9, 243.0], [32.0, 243.0], [32.1, 243.0], [32.2, 243.0], [32.3, 243.0], [32.4, 243.0], [32.5, 243.0], [32.6, 243.0], [32.7, 244.0], [32.8, 244.0], [32.9, 244.0], [33.0, 244.0], [33.1, 244.0], [33.2, 244.0], [33.3, 244.0], [33.4, 244.0], [33.5, 245.0], [33.6, 245.0], [33.7, 245.0], [33.8, 245.0], [33.9, 245.0], [34.0, 245.0], [34.1, 245.0], [34.2, 245.0], [34.3, 246.0], [34.4, 246.0], [34.5, 246.0], [34.6, 246.0], [34.7, 246.0], [34.8, 246.0], [34.9, 246.0], [35.0, 246.0], [35.1, 246.0], [35.2, 246.0], [35.3, 247.0], [35.4, 247.0], [35.5, 247.0], [35.6, 247.0], [35.7, 247.0], [35.8, 247.0], [35.9, 247.0], [36.0, 247.0], [36.1, 247.0], [36.2, 247.0], [36.3, 248.0], [36.4, 248.0], [36.5, 248.0], [36.6, 248.0], [36.7, 248.0], [36.8, 248.0], [36.9, 248.0], [37.0, 248.0], [37.1, 248.0], [37.2, 248.0], [37.3, 248.0], [37.4, 248.0], [37.5, 249.0], [37.6, 249.0], [37.7, 249.0], [37.8, 249.0], [37.9, 249.0], [38.0, 249.0], [38.1, 249.0], [38.2, 249.0], [38.3, 249.0], [38.4, 249.0], [38.5, 249.0], [38.6, 250.0], [38.7, 250.0], [38.8, 250.0], [38.9, 250.0], [39.0, 250.0], [39.1, 250.0], [39.2, 250.0], [39.3, 250.0], [39.4, 250.0], [39.5, 250.0], [39.6, 250.0], [39.7, 250.0], [39.8, 251.0], [39.9, 251.0], [40.0, 251.0], [40.1, 251.0], [40.2, 251.0], [40.3, 251.0], [40.4, 251.0], [40.5, 251.0], [40.6, 251.0], [40.7, 251.0], [40.8, 251.0], [40.9, 251.0], [41.0, 251.0], [41.1, 252.0], [41.2, 252.0], [41.3, 252.0], [41.4, 252.0], [41.5, 252.0], [41.6, 252.0], [41.7, 252.0], [41.8, 252.0], [41.9, 252.0], [42.0, 252.0], [42.1, 252.0], [42.2, 252.0], [42.3, 253.0], [42.4, 253.0], [42.5, 253.0], [42.6, 253.0], [42.7, 253.0], [42.8, 253.0], [42.9, 253.0], [43.0, 253.0], [43.1, 253.0], [43.2, 253.0], [43.3, 253.0], [43.4, 253.0], [43.5, 253.0], [43.6, 254.0], [43.7, 254.0], [43.8, 254.0], [43.9, 254.0], [44.0, 254.0], [44.1, 254.0], [44.2, 254.0], [44.3, 254.0], [44.4, 254.0], [44.5, 254.0], [44.6, 254.0], [44.7, 254.0], [44.8, 254.0], [44.9, 254.0], [45.0, 255.0], [45.1, 255.0], [45.2, 255.0], [45.3, 255.0], [45.4, 255.0], [45.5, 255.0], [45.6, 255.0], [45.7, 255.0], [45.8, 255.0], [45.9, 255.0], [46.0, 255.0], [46.1, 255.0], [46.2, 255.0], [46.3, 255.0], [46.4, 256.0], [46.5, 256.0], [46.6, 256.0], [46.7, 256.0], [46.8, 256.0], [46.9, 256.0], [47.0, 256.0], [47.1, 256.0], [47.2, 256.0], [47.3, 256.0], [47.4, 256.0], [47.5, 256.0], [47.6, 256.0], [47.7, 256.0], [47.8, 257.0], [47.9, 257.0], [48.0, 257.0], [48.1, 257.0], [48.2, 257.0], [48.3, 257.0], [48.4, 257.0], [48.5, 257.0], [48.6, 257.0], [48.7, 257.0], [48.8, 257.0], [48.9, 257.0], [49.0, 257.0], [49.1, 258.0], [49.2, 258.0], [49.3, 258.0], [49.4, 258.0], [49.5, 258.0], [49.6, 258.0], [49.7, 258.0], [49.8, 258.0], [49.9, 258.0], [50.0, 258.0], [50.1, 258.0], [50.2, 258.0], [50.3, 258.0], [50.4, 258.0], [50.5, 259.0], [50.6, 259.0], [50.7, 259.0], [50.8, 259.0], [50.9, 259.0], [51.0, 259.0], [51.1, 259.0], [51.2, 259.0], [51.3, 259.0], [51.4, 259.0], [51.5, 259.0], [51.6, 259.0], [51.7, 259.0], [51.8, 260.0], [51.9, 260.0], [52.0, 260.0], [52.1, 260.0], [52.2, 260.0], [52.3, 260.0], [52.4, 260.0], [52.5, 260.0], [52.6, 260.0], [52.7, 260.0], [52.8, 260.0], [52.9, 260.0], [53.0, 260.0], [53.1, 261.0], [53.2, 261.0], [53.3, 261.0], [53.4, 261.0], [53.5, 261.0], [53.6, 261.0], [53.7, 261.0], [53.8, 261.0], [53.9, 261.0], [54.0, 261.0], [54.1, 261.0], [54.2, 261.0], [54.3, 261.0], [54.4, 261.0], [54.5, 262.0], [54.6, 262.0], [54.7, 262.0], [54.8, 262.0], [54.9, 262.0], [55.0, 262.0], [55.1, 262.0], [55.2, 262.0], [55.3, 262.0], [55.4, 262.0], [55.5, 262.0], [55.6, 262.0], [55.7, 263.0], [55.8, 263.0], [55.9, 263.0], [56.0, 263.0], [56.1, 263.0], [56.2, 263.0], [56.3, 263.0], [56.4, 263.0], [56.5, 263.0], [56.6, 263.0], [56.7, 263.0], [56.8, 263.0], [56.9, 263.0], [57.0, 264.0], [57.1, 264.0], [57.2, 264.0], [57.3, 264.0], [57.4, 264.0], [57.5, 264.0], [57.6, 264.0], [57.7, 264.0], [57.8, 264.0], [57.9, 264.0], [58.0, 264.0], [58.1, 264.0], [58.2, 265.0], [58.3, 265.0], [58.4, 265.0], [58.5, 265.0], [58.6, 265.0], [58.7, 265.0], [58.8, 265.0], [58.9, 265.0], [59.0, 265.0], [59.1, 265.0], [59.2, 265.0], [59.3, 265.0], [59.4, 265.0], [59.5, 266.0], [59.6, 266.0], [59.7, 266.0], [59.8, 266.0], [59.9, 266.0], [60.0, 266.0], [60.1, 266.0], [60.2, 266.0], [60.3, 266.0], [60.4, 266.0], [60.5, 266.0], [60.6, 266.0], [60.7, 266.0], [60.8, 267.0], [60.9, 267.0], [61.0, 267.0], [61.1, 267.0], [61.2, 267.0], [61.3, 267.0], [61.4, 267.0], [61.5, 267.0], [61.6, 267.0], [61.7, 267.0], [61.8, 267.0], [61.9, 267.0], [62.0, 268.0], [62.1, 268.0], [62.2, 268.0], [62.3, 268.0], [62.4, 268.0], [62.5, 268.0], [62.6, 268.0], [62.7, 268.0], [62.8, 268.0], [62.9, 268.0], [63.0, 268.0], [63.1, 268.0], [63.2, 269.0], [63.3, 269.0], [63.4, 269.0], [63.5, 269.0], [63.6, 269.0], [63.7, 269.0], [63.8, 269.0], [63.9, 269.0], [64.0, 269.0], [64.1, 269.0], [64.2, 269.0], [64.3, 269.0], [64.4, 270.0], [64.5, 270.0], [64.6, 270.0], [64.7, 270.0], [64.8, 270.0], [64.9, 270.0], [65.0, 270.0], [65.1, 270.0], [65.2, 270.0], [65.3, 270.0], [65.4, 270.0], [65.5, 271.0], [65.6, 271.0], [65.7, 271.0], [65.8, 271.0], [65.9, 271.0], [66.0, 271.0], [66.1, 271.0], [66.2, 271.0], [66.3, 271.0], [66.4, 271.0], [66.5, 272.0], [66.6, 272.0], [66.7, 272.0], [66.8, 272.0], [66.9, 272.0], [67.0, 272.0], [67.1, 272.0], [67.2, 272.0], [67.3, 272.0], [67.4, 272.0], [67.5, 272.0], [67.6, 273.0], [67.7, 273.0], [67.8, 273.0], [67.9, 273.0], [68.0, 273.0], [68.1, 273.0], [68.2, 273.0], [68.3, 273.0], [68.4, 273.0], [68.5, 273.0], [68.6, 274.0], [68.7, 274.0], [68.8, 274.0], [68.9, 274.0], [69.0, 274.0], [69.1, 274.0], [69.2, 274.0], [69.3, 274.0], [69.4, 274.0], [69.5, 274.0], [69.6, 275.0], [69.7, 275.0], [69.8, 275.0], [69.9, 275.0], [70.0, 275.0], [70.1, 275.0], [70.2, 275.0], [70.3, 275.0], [70.4, 275.0], [70.5, 275.0], [70.6, 276.0], [70.7, 276.0], [70.8, 276.0], [70.9, 276.0], [71.0, 276.0], [71.1, 276.0], [71.2, 276.0], [71.3, 276.0], [71.4, 276.0], [71.5, 276.0], [71.6, 277.0], [71.7, 277.0], [71.8, 277.0], [71.9, 277.0], [72.0, 277.0], [72.1, 277.0], [72.2, 277.0], [72.3, 277.0], [72.4, 277.0], [72.5, 277.0], [72.6, 278.0], [72.7, 278.0], [72.8, 278.0], [72.9, 278.0], [73.0, 278.0], [73.1, 278.0], [73.2, 278.0], [73.3, 278.0], [73.4, 279.0], [73.5, 279.0], [73.6, 279.0], [73.7, 279.0], [73.8, 279.0], [73.9, 279.0], [74.0, 279.0], [74.1, 279.0], [74.2, 279.0], [74.3, 280.0], [74.4, 280.0], [74.5, 280.0], [74.6, 280.0], [74.7, 280.0], [74.8, 280.0], [74.9, 280.0], [75.0, 280.0], [75.1, 280.0], [75.2, 281.0], [75.3, 281.0], [75.4, 281.0], [75.5, 281.0], [75.6, 281.0], [75.7, 281.0], [75.8, 281.0], [75.9, 281.0], [76.0, 281.0], [76.1, 282.0], [76.2, 282.0], [76.3, 282.0], [76.4, 282.0], [76.5, 282.0], [76.6, 282.0], [76.7, 282.0], [76.8, 283.0], [76.9, 283.0], [77.0, 283.0], [77.1, 283.0], [77.2, 283.0], [77.3, 283.0], [77.4, 283.0], [77.5, 284.0], [77.6, 284.0], [77.7, 284.0], [77.8, 284.0], [77.9, 284.0], [78.0, 284.0], [78.1, 284.0], [78.2, 284.0], [78.3, 285.0], [78.4, 285.0], [78.5, 285.0], [78.6, 285.0], [78.7, 285.0], [78.8, 285.0], [78.9, 285.0], [79.0, 285.0], [79.1, 286.0], [79.2, 286.0], [79.3, 286.0], [79.4, 286.0], [79.5, 286.0], [79.6, 286.0], [79.7, 286.0], [79.8, 287.0], [79.9, 287.0], [80.0, 287.0], [80.1, 287.0], [80.2, 287.0], [80.3, 287.0], [80.4, 287.0], [80.5, 288.0], [80.6, 288.0], [80.7, 288.0], [80.8, 288.0], [80.9, 288.0], [81.0, 288.0], [81.1, 289.0], [81.2, 289.0], [81.3, 289.0], [81.4, 289.0], [81.5, 289.0], [81.6, 289.0], [81.7, 290.0], [81.8, 290.0], [81.9, 290.0], [82.0, 290.0], [82.1, 290.0], [82.2, 291.0], [82.3, 291.0], [82.4, 291.0], [82.5, 291.0], [82.6, 291.0], [82.7, 292.0], [82.8, 292.0], [82.9, 292.0], [83.0, 292.0], [83.1, 292.0], [83.2, 292.0], [83.3, 293.0], [83.4, 293.0], [83.5, 293.0], [83.6, 293.0], [83.7, 293.0], [83.8, 294.0], [83.9, 294.0], [84.0, 294.0], [84.1, 294.0], [84.2, 294.0], [84.3, 295.0], [84.4, 295.0], [84.5, 295.0], [84.6, 295.0], [84.7, 295.0], [84.8, 296.0], [84.9, 296.0], [85.0, 296.0], [85.1, 296.0], [85.2, 297.0], [85.3, 297.0], [85.4, 297.0], [85.5, 297.0], [85.6, 298.0], [85.7, 298.0], [85.8, 298.0], [85.9, 298.0], [86.0, 299.0], [86.1, 299.0], [86.2, 299.0], [86.3, 299.0], [86.4, 300.0], [86.5, 300.0], [86.6, 300.0], [86.7, 300.0], [86.8, 301.0], [86.9, 301.0], [87.0, 301.0], [87.1, 302.0], [87.2, 302.0], [87.3, 302.0], [87.4, 303.0], [87.5, 303.0], [87.6, 304.0], [87.7, 304.0], [87.8, 304.0], [87.9, 305.0], [88.0, 305.0], [88.1, 305.0], [88.2, 306.0], [88.3, 306.0], [88.4, 307.0], [88.5, 307.0], [88.6, 308.0], [88.7, 308.0], [88.8, 308.0], [88.9, 309.0], [89.0, 309.0], [89.1, 310.0], [89.2, 310.0], [89.3, 311.0], [89.4, 311.0], [89.5, 312.0], [89.6, 312.0], [89.7, 313.0], [89.8, 313.0], [89.9, 313.0], [90.0, 314.0], [90.1, 314.0], [90.2, 315.0], [90.3, 315.0], [90.4, 315.0], [90.5, 316.0], [90.6, 316.0], [90.7, 317.0], [90.8, 317.0], [90.9, 318.0], [91.0, 318.0], [91.1, 319.0], [91.2, 319.0], [91.3, 319.0], [91.4, 320.0], [91.5, 320.0], [91.6, 321.0], [91.7, 321.0], [91.8, 321.0], [91.9, 322.0], [92.0, 322.0], [92.1, 323.0], [92.2, 323.0], [92.3, 323.0], [92.4, 324.0], [92.5, 324.0], [92.6, 325.0], [92.7, 325.0], [92.8, 325.0], [92.9, 326.0], [93.0, 326.0], [93.1, 327.0], [93.2, 327.0], [93.3, 328.0], [93.4, 328.0], [93.5, 329.0], [93.6, 329.0], [93.7, 330.0], [93.8, 330.0], [93.9, 330.0], [94.0, 331.0], [94.1, 331.0], [94.2, 332.0], [94.3, 332.0], [94.4, 333.0], [94.5, 334.0], [94.6, 334.0], [94.7, 335.0], [94.8, 336.0], [94.9, 336.0], [95.0, 337.0], [95.1, 337.0], [95.2, 338.0], [95.3, 339.0], [95.4, 340.0], [95.5, 341.0], [95.6, 341.0], [95.7, 342.0], [95.8, 344.0], [95.9, 345.0], [96.0, 346.0], [96.1, 347.0], [96.2, 348.0], [96.3, 350.0], [96.4, 351.0], [96.5, 353.0], [96.6, 354.0], [96.7, 356.0], [96.8, 358.0], [96.9, 360.0], [97.0, 362.0], [97.1, 363.0], [97.2, 365.0], [97.3, 367.0], [97.4, 369.0], [97.5, 370.0], [97.6, 371.0], [97.7, 373.0], [97.8, 374.0], [97.9, 375.0], [98.0, 377.0], [98.1, 378.0], [98.2, 379.0], [98.3, 380.0], [98.4, 381.0], [98.5, 383.0], [98.6, 384.0], [98.7, 386.0], [98.8, 387.0], [98.9, 389.0], [99.0, 391.0], [99.1, 393.0], [99.2, 395.0], [99.3, 397.0], [99.4, 400.0], [99.5, 402.0], [99.6, 406.0], [99.7, 409.0], [99.8, 413.0], [99.9, 421.0], [100.0, 439.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 251.0, "minX": 0.0, "maxY": 26864.0, "series": [{"data": [[0.0, 4067.0], [300.0, 5439.0], [100.0, 4952.0], [200.0, 26864.0], [400.0, 251.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 41573.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 41573.0, "series": [{"data": [[0.0, 41573.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 156.030772079245, "minX": 1.7913849E12, "maxY": 198.66124382207573, "series": [{"data": [[1.79138496E12, 198.66124382207573], [1.7913849E12, 156.030772079245]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138496E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 27.354166666666664, "minX": 1.0, "maxY": 280.03864480414944, "series": [{"data": [[2.0, 156.0], [3.0, 71.85714285714286], [4.0, 30.13333333333333], [5.0, 33.714285714285715], [6.0, 30.631578947368418], [7.0, 47.827586206896555], [8.0, 29.153846153846153], [9.0, 36.88461538461537], [10.0, 36.48148148148148], [11.0, 30.449999999999992], [12.0, 35.48837209302325], [13.0, 43.91836734693879], [14.0, 27.354166666666664], [15.0, 30.232142857142858], [16.0, 39.21951219512196], [17.0, 37.468085106382965], [18.0, 40.69642857142858], [19.0, 47.90740740740741], [20.0, 34.39682539682539], [21.0, 39.37735849056603], [22.0, 36.739726027397275], [23.0, 50.2909090909091], [24.0, 55.177777777777784], [25.0, 49.28070175438595], [26.0, 50.77966101694915], [27.0, 43.533333333333324], [28.0, 56.71186440677969], [29.0, 50.16129032258065], [30.0, 45.24999999999999], [31.0, 44.59420289855074], [32.0, 53.671428571428564], [33.0, 48.19718309859155], [34.0, 47.48611111111113], [35.0, 53.07142857142856], [36.0, 68.67272727272729], [37.0, 71.42592592592592], [38.0, 76.6938775510204], [39.0, 79.01923076923076], [40.0, 77.96666666666665], [41.0, 68.53030303030303], [42.0, 64.44776119402985], [43.0, 60.38666666666666], [44.0, 65.42857142857144], [45.0, 63.25714285714284], [46.0, 66.65217391304346], [47.0, 74.94202898550725], [48.0, 81.67857142857146], [49.0, 73.94047619047619], [50.0, 75.27272727272728], [51.0, 86.12280701754386], [52.0, 81.7222222222222], [53.0, 81.98484848484847], [54.0, 77.39743589743587], [55.0, 82.84615384615383], [56.0, 88.4788732394366], [57.0, 85.68181818181817], [58.0, 78.6282051282051], [59.0, 82.30434782608694], [60.0, 87.40789473684211], [61.0, 92.93939393939392], [62.0, 98.63076923076923], [63.0, 103.16666666666667], [64.0, 104.52380952380952], [65.0, 107.26785714285712], [66.0, 115.44642857142857], [67.0, 115.42000000000002], [68.0, 136.55], [69.0, 106.70886075949366], [70.0, 95.99999999999999], [71.0, 95.43749999999999], [72.0, 93.29069767441864], [73.0, 98.83561643835613], [74.0, 94.22222222222219], [75.0, 98.26582278481014], [76.0, 94.64999999999999], [77.0, 98.96153846153847], [78.0, 109.1388888888889], [79.0, 117.0588235294118], [80.0, 105.675], [81.0, 104.11842105263156], [82.0, 102.97530864197529], [83.0, 105.83146067415733], [84.0, 98.3684210526316], [85.0, 142.94736842105266], [86.0, 118.3804347826087], [87.0, 103.1714285714286], [88.0, 119.43243243243245], [89.0, 122.73417721518989], [90.0, 115.8472222222222], [91.0, 128.16666666666669], [92.0, 127.75641025641029], [93.0, 138.91666666666663], [94.0, 151.73584905660374], [95.0, 155.00000000000003], [96.0, 170.9], [97.0, 167.83606557377055], [98.0, 162.02816901408445], [99.0, 152.23437499999994], [100.0, 140.03125000000003], [101.0, 157.5], [102.0, 162.9387755102041], [103.0, 161.28985507246375], [104.0, 173.42622950819677], [105.0, 180.89795918367344], [106.0, 194.31666666666666], [107.0, 203.3191489361702], [108.0, 185.8888888888889], [109.0, 180.7659574468085], [110.0, 191.52238805970143], [111.0, 191.41509433962264], [112.0, 210.02272727272725], [113.0, 238.22916666666669], [114.0, 240.47457627118646], [115.0, 214.625], [116.0, 203.11999999999998], [117.0, 238.31707317073167], [118.0, 264.5918367346939], [119.0, 242.47142857142853], [120.0, 183.06451612903226], [121.0, 174.1351351351351], [122.0, 174.17567567567568], [123.0, 161.96470588235294], [124.0, 149.7674418604652], [125.0, 151.77142857142854], [126.0, 173.80769230769232], [127.0, 214.67213114754102], [128.0, 220.3150684931507], [129.0, 188.42424242424246], [130.0, 188.36111111111117], [131.0, 192.16176470588238], [132.0, 187.36842105263162], [133.0, 180.64285714285708], [134.0, 172.16091954022988], [135.0, 172.76315789473688], [136.0, 169.67532467532476], [137.0, 174.98717948717947], [138.0, 176.97260273972603], [139.0, 184.43999999999994], [140.0, 194.44047619047618], [141.0, 182.24324324324328], [142.0, 183.30555555555551], [143.0, 185.7341772151899], [144.0, 186.5633802816901], [145.0, 192.3513513513513], [146.0, 202.515625], [147.0, 212.63513513513513], [148.0, 208.99999999999991], [149.0, 192.6071428571429], [150.0, 187.7710843373494], [151.0, 190.01265822784814], [152.0, 184.1688311688312], [153.0, 189.23170731707307], [154.0, 187.93589743589735], [155.0, 193.0379746835443], [156.0, 195.86666666666665], [157.0, 206.1643835616439], [158.0, 215.06666666666666], [159.0, 225.47058823529412], [160.0, 225.56666666666666], [161.0, 228.53846153846158], [162.0, 227.112676056338], [163.0, 226.4333333333333], [164.0, 241.73611111111103], [165.0, 248.93939393939397], [166.0, 232.33766233766238], [167.0, 235.2166666666666], [168.0, 234.57333333333338], [169.0, 237.3846153846154], [170.0, 234.47500000000005], [171.0, 233.57575757575756], [172.0, 237.88333333333333], [173.0, 238.64705882352945], [174.0, 236.71875], [175.0, 232.474358974359], [176.0, 233.95652173913044], [177.0, 232.43055555555551], [178.0, 230.07142857142856], [179.0, 224.83783783783784], [180.0, 218.5517241379311], [181.0, 221.21126760563382], [182.0, 221.13095238095238], [183.0, 223.21126760563382], [184.0, 221.8181818181819], [185.0, 225.94736842105263], [186.0, 224.37499999999997], [187.0, 223.3], [188.0, 223.91549295774644], [189.0, 231.29166666666666], [190.0, 236.2784810126582], [191.0, 237.44776119402985], [192.0, 236.9285714285715], [193.0, 246.2456140350877], [194.0, 250.1617647058823], [195.0, 255.00000000000003], [196.0, 250.27848101265823], [197.0, 248.52380952380952], [198.0, 250.83333333333334], [199.0, 247.05970149253733], [200.0, 280.03864480414944], [1.0, 167.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[170.9693070021395, 239.75642845115834]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 74782.4, "minX": 1.7913849E12, "maxY": 1096123.15, "series": [{"data": [[1.79138496E12, 591305.25], [1.7913849E12, 1096123.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79138496E12, 74782.4], [1.7913849E12, 138625.66666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138496E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 212.87306054434376, "minX": 1.7913849E12, "maxY": 289.59067819879186, "series": [{"data": [[1.79138496E12, 289.59067819879186], [1.7913849E12, 212.87306054434376]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138496E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 212.59477874467746, "minX": 1.7913849E12, "maxY": 289.2927649643081, "series": [{"data": [[1.79138496E12, 289.2927649643081], [1.7913849E12, 212.59477874467746]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138496E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.7913849E12, "maxY": 0.021403443806702567, "series": [{"data": [[1.79138496E12, 0.0], [1.7913849E12, 0.021403443806702567]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138496E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 24.0, "minX": 1.7913849E12, "maxY": 439.0, "series": [{"data": [[1.79138496E12, 439.0], [1.7913849E12, 431.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79138496E12, 156.0], [1.7913849E12, 24.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79138496E12, 339.0], [1.7913849E12, 294.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79138496E12, 404.0], [1.7913849E12, 367.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79138496E12, 280.0], [1.7913849E12, 254.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79138496E12, 375.0], [1.7913849E12, 317.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138496E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 32.0, "minX": 95.0, "maxY": 385.0, "series": [{"data": [[542.0, 44.0], [526.0, 385.0], [605.0, 98.0], [601.0, 165.0], [610.0, 49.0], [616.0, 273.0], [631.0, 310.0], [635.0, 320.0], [617.0, 324.0], [654.0, 66.0], [667.0, 78.0], [650.0, 136.0], [666.0, 286.0], [670.0, 304.0], [652.0, 288.5], [669.0, 296.0], [690.0, 174.0], [695.0, 231.0], [681.0, 296.0], [676.0, 285.0], [672.0, 295.0], [696.0, 281.5], [730.0, 243.5], [708.0, 279.0], [704.0, 282.0], [709.0, 277.0], [729.0, 279.0], [762.0, 259.0], [756.0, 96.0], [759.0, 105.0], [739.0, 179.0], [748.0, 269.0], [751.0, 273.0], [740.0, 233.0], [742.0, 270.0], [760.0, 263.0], [758.0, 261.0], [764.0, 251.0], [757.0, 267.0], [745.0, 266.0], [744.0, 266.0], [790.0, 191.0], [786.0, 247.0], [778.0, 258.0], [789.0, 252.0], [776.0, 258.0], [788.0, 256.0], [783.0, 256.0], [770.0, 259.0], [816.0, 223.0], [802.0, 248.0], [812.0, 246.0], [95.0, 208.0], [159.0, 32.0], [441.0, 33.0], [498.0, 209.5], [507.0, 376.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 816.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 32.0, "minX": 95.0, "maxY": 385.0, "series": [{"data": [[542.0, 44.0], [526.0, 385.0], [605.0, 98.0], [601.0, 165.0], [610.0, 48.5], [616.0, 273.0], [631.0, 310.0], [635.0, 319.0], [617.0, 324.0], [654.0, 66.0], [667.0, 78.0], [650.0, 136.0], [666.0, 286.0], [670.0, 304.0], [652.0, 288.5], [669.0, 296.0], [690.0, 173.0], [695.0, 231.0], [681.0, 296.0], [676.0, 284.0], [672.0, 295.0], [696.0, 281.0], [730.0, 243.5], [708.0, 278.0], [704.0, 282.0], [709.0, 277.0], [729.0, 278.0], [762.0, 258.0], [756.0, 95.0], [759.0, 105.0], [739.0, 179.0], [748.0, 268.0], [751.0, 273.0], [740.0, 233.0], [742.0, 269.0], [760.0, 262.0], [758.0, 261.0], [764.0, 251.0], [757.0, 266.0], [745.0, 266.0], [744.0, 266.0], [790.0, 191.0], [786.0, 246.0], [778.0, 258.0], [789.0, 252.0], [776.0, 258.0], [788.0, 256.0], [783.0, 256.0], [770.0, 259.0], [816.0, 223.0], [802.0, 248.0], [812.0, 246.0], [95.0, 208.0], [159.0, 32.0], [441.0, 33.0], [498.0, 209.5], [507.0, 376.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 816.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 239.46666666666667, "minX": 1.7913849E12, "maxY": 453.4166666666667, "series": [{"data": [[1.79138496E12, 239.46666666666667], [1.7913849E12, 453.4166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138496E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 242.8, "minX": 1.7913849E12, "maxY": 450.0833333333333, "series": [{"data": [[1.79138496E12, 242.8], [1.7913849E12, 450.0833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138496E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 242.8, "minX": 1.7913849E12, "maxY": 450.0833333333333, "series": [{"data": [[1.79138496E12, 242.8], [1.7913849E12, 450.0833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138496E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 242.8, "minX": 1.7913849E12, "maxY": 450.0833333333333, "series": [{"data": [[1.79138496E12, 242.8], [1.7913849E12, 450.0833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138496E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

