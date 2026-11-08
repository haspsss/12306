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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 374.0, "series": [{"data": [[0.0, 17.0], [0.1, 20.0], [0.2, 20.0], [0.3, 21.0], [0.4, 21.0], [0.5, 22.0], [0.6, 22.0], [0.7, 23.0], [0.8, 24.0], [0.9, 25.0], [1.0, 27.0], [1.1, 29.0], [1.2, 30.0], [1.3, 31.0], [1.4, 32.0], [1.5, 32.0], [1.6, 33.0], [1.7, 34.0], [1.8, 35.0], [1.9, 36.0], [2.0, 36.0], [2.1, 38.0], [2.2, 38.0], [2.3, 39.0], [2.4, 40.0], [2.5, 41.0], [2.6, 42.0], [2.7, 43.0], [2.8, 43.0], [2.9, 44.0], [3.0, 45.0], [3.1, 46.0], [3.2, 47.0], [3.3, 48.0], [3.4, 50.0], [3.5, 52.0], [3.6, 54.0], [3.7, 56.0], [3.8, 57.0], [3.9, 58.0], [4.0, 59.0], [4.1, 60.0], [4.2, 60.0], [4.3, 61.0], [4.4, 62.0], [4.5, 63.0], [4.6, 63.0], [4.7, 64.0], [4.8, 65.0], [4.9, 66.0], [5.0, 67.0], [5.1, 68.0], [5.2, 68.0], [5.3, 69.0], [5.4, 71.0], [5.5, 71.0], [5.6, 73.0], [5.7, 74.0], [5.8, 75.0], [5.9, 76.0], [6.0, 77.0], [6.1, 78.0], [6.2, 79.0], [6.3, 80.0], [6.4, 80.0], [6.5, 81.0], [6.6, 82.0], [6.7, 83.0], [6.8, 83.0], [6.9, 84.0], [7.0, 85.0], [7.1, 85.0], [7.2, 86.0], [7.3, 86.0], [7.4, 87.0], [7.5, 87.0], [7.6, 88.0], [7.7, 88.0], [7.8, 89.0], [7.9, 89.0], [8.0, 90.0], [8.1, 90.0], [8.2, 91.0], [8.3, 91.0], [8.4, 92.0], [8.5, 92.0], [8.6, 93.0], [8.7, 93.0], [8.8, 94.0], [8.9, 94.0], [9.0, 95.0], [9.1, 96.0], [9.2, 96.0], [9.3, 97.0], [9.4, 97.0], [9.5, 98.0], [9.6, 99.0], [9.7, 99.0], [9.8, 100.0], [9.9, 100.0], [10.0, 101.0], [10.1, 102.0], [10.2, 102.0], [10.3, 103.0], [10.4, 104.0], [10.5, 105.0], [10.6, 106.0], [10.7, 107.0], [10.8, 107.0], [10.9, 108.0], [11.0, 108.0], [11.1, 109.0], [11.2, 110.0], [11.3, 111.0], [11.4, 111.0], [11.5, 112.0], [11.6, 113.0], [11.7, 114.0], [11.8, 114.0], [11.9, 115.0], [12.0, 116.0], [12.1, 117.0], [12.2, 118.0], [12.3, 119.0], [12.4, 120.0], [12.5, 121.0], [12.6, 122.0], [12.7, 123.0], [12.8, 124.0], [12.9, 125.0], [13.0, 127.0], [13.1, 128.0], [13.2, 129.0], [13.3, 131.0], [13.4, 133.0], [13.5, 135.0], [13.6, 137.0], [13.7, 139.0], [13.8, 141.0], [13.9, 144.0], [14.0, 146.0], [14.1, 149.0], [14.2, 151.0], [14.3, 154.0], [14.4, 156.0], [14.5, 159.0], [14.6, 162.0], [14.7, 164.0], [14.8, 166.0], [14.9, 168.0], [15.0, 169.0], [15.1, 171.0], [15.2, 172.0], [15.3, 173.0], [15.4, 174.0], [15.5, 175.0], [15.6, 176.0], [15.7, 177.0], [15.8, 178.0], [15.9, 179.0], [16.0, 179.0], [16.1, 180.0], [16.2, 181.0], [16.3, 182.0], [16.4, 182.0], [16.5, 183.0], [16.6, 184.0], [16.7, 184.0], [16.8, 185.0], [16.9, 186.0], [17.0, 186.0], [17.1, 187.0], [17.2, 187.0], [17.3, 188.0], [17.4, 188.0], [17.5, 189.0], [17.6, 189.0], [17.7, 190.0], [17.8, 190.0], [17.9, 190.0], [18.0, 191.0], [18.1, 191.0], [18.2, 192.0], [18.3, 192.0], [18.4, 192.0], [18.5, 193.0], [18.6, 193.0], [18.7, 193.0], [18.8, 194.0], [18.9, 194.0], [19.0, 195.0], [19.1, 195.0], [19.2, 195.0], [19.3, 195.0], [19.4, 196.0], [19.5, 196.0], [19.6, 196.0], [19.7, 197.0], [19.8, 197.0], [19.9, 197.0], [20.0, 198.0], [20.1, 198.0], [20.2, 198.0], [20.3, 199.0], [20.4, 199.0], [20.5, 199.0], [20.6, 200.0], [20.7, 200.0], [20.8, 200.0], [20.9, 201.0], [21.0, 201.0], [21.1, 201.0], [21.2, 202.0], [21.3, 202.0], [21.4, 202.0], [21.5, 203.0], [21.6, 203.0], [21.7, 203.0], [21.8, 204.0], [21.9, 204.0], [22.0, 204.0], [22.1, 205.0], [22.2, 205.0], [22.3, 205.0], [22.4, 206.0], [22.5, 206.0], [22.6, 207.0], [22.7, 207.0], [22.8, 207.0], [22.9, 208.0], [23.0, 208.0], [23.1, 209.0], [23.2, 209.0], [23.3, 209.0], [23.4, 210.0], [23.5, 210.0], [23.6, 210.0], [23.7, 211.0], [23.8, 211.0], [23.9, 211.0], [24.0, 212.0], [24.1, 212.0], [24.2, 212.0], [24.3, 213.0], [24.4, 213.0], [24.5, 214.0], [24.6, 214.0], [24.7, 214.0], [24.8, 215.0], [24.9, 215.0], [25.0, 216.0], [25.1, 216.0], [25.2, 216.0], [25.3, 217.0], [25.4, 217.0], [25.5, 218.0], [25.6, 218.0], [25.7, 218.0], [25.8, 219.0], [25.9, 219.0], [26.0, 220.0], [26.1, 220.0], [26.2, 220.0], [26.3, 221.0], [26.4, 221.0], [26.5, 221.0], [26.6, 222.0], [26.7, 222.0], [26.8, 222.0], [26.9, 222.0], [27.0, 223.0], [27.1, 223.0], [27.2, 223.0], [27.3, 224.0], [27.4, 224.0], [27.5, 224.0], [27.6, 224.0], [27.7, 224.0], [27.8, 225.0], [27.9, 225.0], [28.0, 225.0], [28.1, 225.0], [28.2, 225.0], [28.3, 226.0], [28.4, 226.0], [28.5, 226.0], [28.6, 226.0], [28.7, 226.0], [28.8, 226.0], [28.9, 227.0], [29.0, 227.0], [29.1, 227.0], [29.2, 227.0], [29.3, 227.0], [29.4, 227.0], [29.5, 227.0], [29.6, 228.0], [29.7, 228.0], [29.8, 228.0], [29.9, 228.0], [30.0, 228.0], [30.1, 228.0], [30.2, 228.0], [30.3, 228.0], [30.4, 229.0], [30.5, 229.0], [30.6, 229.0], [30.7, 229.0], [30.8, 229.0], [30.9, 229.0], [31.0, 229.0], [31.1, 229.0], [31.2, 230.0], [31.3, 230.0], [31.4, 230.0], [31.5, 230.0], [31.6, 230.0], [31.7, 230.0], [31.8, 230.0], [31.9, 230.0], [32.0, 230.0], [32.1, 230.0], [32.2, 231.0], [32.3, 231.0], [32.4, 231.0], [32.5, 231.0], [32.6, 231.0], [32.7, 231.0], [32.8, 231.0], [32.9, 231.0], [33.0, 231.0], [33.1, 231.0], [33.2, 231.0], [33.3, 231.0], [33.4, 232.0], [33.5, 232.0], [33.6, 232.0], [33.7, 232.0], [33.8, 232.0], [33.9, 232.0], [34.0, 232.0], [34.1, 232.0], [34.2, 232.0], [34.3, 232.0], [34.4, 232.0], [34.5, 232.0], [34.6, 232.0], [34.7, 233.0], [34.8, 233.0], [34.9, 233.0], [35.0, 233.0], [35.1, 233.0], [35.2, 233.0], [35.3, 233.0], [35.4, 233.0], [35.5, 233.0], [35.6, 233.0], [35.7, 233.0], [35.8, 233.0], [35.9, 233.0], [36.0, 233.0], [36.1, 233.0], [36.2, 234.0], [36.3, 234.0], [36.4, 234.0], [36.5, 234.0], [36.6, 234.0], [36.7, 234.0], [36.8, 234.0], [36.9, 234.0], [37.0, 234.0], [37.1, 234.0], [37.2, 234.0], [37.3, 234.0], [37.4, 234.0], [37.5, 234.0], [37.6, 234.0], [37.7, 234.0], [37.8, 235.0], [37.9, 235.0], [38.0, 235.0], [38.1, 235.0], [38.2, 235.0], [38.3, 235.0], [38.4, 235.0], [38.5, 235.0], [38.6, 235.0], [38.7, 235.0], [38.8, 235.0], [38.9, 235.0], [39.0, 235.0], [39.1, 235.0], [39.2, 235.0], [39.3, 235.0], [39.4, 235.0], [39.5, 235.0], [39.6, 235.0], [39.7, 236.0], [39.8, 236.0], [39.9, 236.0], [40.0, 236.0], [40.1, 236.0], [40.2, 236.0], [40.3, 236.0], [40.4, 236.0], [40.5, 236.0], [40.6, 236.0], [40.7, 236.0], [40.8, 236.0], [40.9, 236.0], [41.0, 236.0], [41.1, 236.0], [41.2, 236.0], [41.3, 236.0], [41.4, 236.0], [41.5, 236.0], [41.6, 236.0], [41.7, 237.0], [41.8, 237.0], [41.9, 237.0], [42.0, 237.0], [42.1, 237.0], [42.2, 237.0], [42.3, 237.0], [42.4, 237.0], [42.5, 237.0], [42.6, 237.0], [42.7, 237.0], [42.8, 237.0], [42.9, 237.0], [43.0, 237.0], [43.1, 237.0], [43.2, 237.0], [43.3, 237.0], [43.4, 237.0], [43.5, 237.0], [43.6, 237.0], [43.7, 237.0], [43.8, 238.0], [43.9, 238.0], [44.0, 238.0], [44.1, 238.0], [44.2, 238.0], [44.3, 238.0], [44.4, 238.0], [44.5, 238.0], [44.6, 238.0], [44.7, 238.0], [44.8, 238.0], [44.9, 238.0], [45.0, 238.0], [45.1, 238.0], [45.2, 238.0], [45.3, 238.0], [45.4, 238.0], [45.5, 238.0], [45.6, 238.0], [45.7, 238.0], [45.8, 238.0], [45.9, 238.0], [46.0, 239.0], [46.1, 239.0], [46.2, 239.0], [46.3, 239.0], [46.4, 239.0], [46.5, 239.0], [46.6, 239.0], [46.7, 239.0], [46.8, 239.0], [46.9, 239.0], [47.0, 239.0], [47.1, 239.0], [47.2, 239.0], [47.3, 239.0], [47.4, 239.0], [47.5, 239.0], [47.6, 239.0], [47.7, 239.0], [47.8, 239.0], [47.9, 239.0], [48.0, 239.0], [48.1, 239.0], [48.2, 240.0], [48.3, 240.0], [48.4, 240.0], [48.5, 240.0], [48.6, 240.0], [48.7, 240.0], [48.8, 240.0], [48.9, 240.0], [49.0, 240.0], [49.1, 240.0], [49.2, 240.0], [49.3, 240.0], [49.4, 240.0], [49.5, 240.0], [49.6, 240.0], [49.7, 240.0], [49.8, 240.0], [49.9, 240.0], [50.0, 240.0], [50.1, 240.0], [50.2, 240.0], [50.3, 240.0], [50.4, 240.0], [50.5, 240.0], [50.6, 240.0], [50.7, 241.0], [50.8, 241.0], [50.9, 241.0], [51.0, 241.0], [51.1, 241.0], [51.2, 241.0], [51.3, 241.0], [51.4, 241.0], [51.5, 241.0], [51.6, 241.0], [51.7, 241.0], [51.8, 241.0], [51.9, 241.0], [52.0, 241.0], [52.1, 241.0], [52.2, 241.0], [52.3, 241.0], [52.4, 241.0], [52.5, 241.0], [52.6, 241.0], [52.7, 241.0], [52.8, 241.0], [52.9, 241.0], [53.0, 241.0], [53.1, 242.0], [53.2, 242.0], [53.3, 242.0], [53.4, 242.0], [53.5, 242.0], [53.6, 242.0], [53.7, 242.0], [53.8, 242.0], [53.9, 242.0], [54.0, 242.0], [54.1, 242.0], [54.2, 242.0], [54.3, 242.0], [54.4, 242.0], [54.5, 242.0], [54.6, 242.0], [54.7, 242.0], [54.8, 242.0], [54.9, 242.0], [55.0, 242.0], [55.1, 242.0], [55.2, 242.0], [55.3, 242.0], [55.4, 242.0], [55.5, 242.0], [55.6, 242.0], [55.7, 243.0], [55.8, 243.0], [55.9, 243.0], [56.0, 243.0], [56.1, 243.0], [56.2, 243.0], [56.3, 243.0], [56.4, 243.0], [56.5, 243.0], [56.6, 243.0], [56.7, 243.0], [56.8, 243.0], [56.9, 243.0], [57.0, 243.0], [57.1, 243.0], [57.2, 243.0], [57.3, 243.0], [57.4, 243.0], [57.5, 243.0], [57.6, 243.0], [57.7, 243.0], [57.8, 243.0], [57.9, 243.0], [58.0, 243.0], [58.1, 243.0], [58.2, 243.0], [58.3, 244.0], [58.4, 244.0], [58.5, 244.0], [58.6, 244.0], [58.7, 244.0], [58.8, 244.0], [58.9, 244.0], [59.0, 244.0], [59.1, 244.0], [59.2, 244.0], [59.3, 244.0], [59.4, 244.0], [59.5, 244.0], [59.6, 244.0], [59.7, 244.0], [59.8, 244.0], [59.9, 244.0], [60.0, 244.0], [60.1, 244.0], [60.2, 244.0], [60.3, 244.0], [60.4, 244.0], [60.5, 244.0], [60.6, 244.0], [60.7, 245.0], [60.8, 245.0], [60.9, 245.0], [61.0, 245.0], [61.1, 245.0], [61.2, 245.0], [61.3, 245.0], [61.4, 245.0], [61.5, 245.0], [61.6, 245.0], [61.7, 245.0], [61.8, 245.0], [61.9, 245.0], [62.0, 245.0], [62.1, 245.0], [62.2, 245.0], [62.3, 245.0], [62.4, 245.0], [62.5, 245.0], [62.6, 245.0], [62.7, 245.0], [62.8, 245.0], [62.9, 245.0], [63.0, 245.0], [63.1, 245.0], [63.2, 245.0], [63.3, 246.0], [63.4, 246.0], [63.5, 246.0], [63.6, 246.0], [63.7, 246.0], [63.8, 246.0], [63.9, 246.0], [64.0, 246.0], [64.1, 246.0], [64.2, 246.0], [64.3, 246.0], [64.4, 246.0], [64.5, 246.0], [64.6, 246.0], [64.7, 246.0], [64.8, 246.0], [64.9, 246.0], [65.0, 246.0], [65.1, 246.0], [65.2, 246.0], [65.3, 246.0], [65.4, 246.0], [65.5, 246.0], [65.6, 247.0], [65.7, 247.0], [65.8, 247.0], [65.9, 247.0], [66.0, 247.0], [66.1, 247.0], [66.2, 247.0], [66.3, 247.0], [66.4, 247.0], [66.5, 247.0], [66.6, 247.0], [66.7, 247.0], [66.8, 247.0], [66.9, 247.0], [67.0, 247.0], [67.1, 247.0], [67.2, 247.0], [67.3, 247.0], [67.4, 247.0], [67.5, 247.0], [67.6, 247.0], [67.7, 247.0], [67.8, 247.0], [67.9, 247.0], [68.0, 248.0], [68.1, 248.0], [68.2, 248.0], [68.3, 248.0], [68.4, 248.0], [68.5, 248.0], [68.6, 248.0], [68.7, 248.0], [68.8, 248.0], [68.9, 248.0], [69.0, 248.0], [69.1, 248.0], [69.2, 248.0], [69.3, 248.0], [69.4, 248.0], [69.5, 248.0], [69.6, 248.0], [69.7, 248.0], [69.8, 248.0], [69.9, 248.0], [70.0, 248.0], [70.1, 249.0], [70.2, 249.0], [70.3, 249.0], [70.4, 249.0], [70.5, 249.0], [70.6, 249.0], [70.7, 249.0], [70.8, 249.0], [70.9, 249.0], [71.0, 249.0], [71.1, 249.0], [71.2, 249.0], [71.3, 249.0], [71.4, 249.0], [71.5, 249.0], [71.6, 249.0], [71.7, 249.0], [71.8, 249.0], [71.9, 249.0], [72.0, 249.0], [72.1, 250.0], [72.2, 250.0], [72.3, 250.0], [72.4, 250.0], [72.5, 250.0], [72.6, 250.0], [72.7, 250.0], [72.8, 250.0], [72.9, 250.0], [73.0, 250.0], [73.1, 250.0], [73.2, 250.0], [73.3, 250.0], [73.4, 250.0], [73.5, 250.0], [73.6, 250.0], [73.7, 250.0], [73.8, 250.0], [73.9, 251.0], [74.0, 251.0], [74.1, 251.0], [74.2, 251.0], [74.3, 251.0], [74.4, 251.0], [74.5, 251.0], [74.6, 251.0], [74.7, 251.0], [74.8, 251.0], [74.9, 251.0], [75.0, 251.0], [75.1, 251.0], [75.2, 251.0], [75.3, 251.0], [75.4, 251.0], [75.5, 252.0], [75.6, 252.0], [75.7, 252.0], [75.8, 252.0], [75.9, 252.0], [76.0, 252.0], [76.1, 252.0], [76.2, 252.0], [76.3, 252.0], [76.4, 252.0], [76.5, 252.0], [76.6, 252.0], [76.7, 252.0], [76.8, 252.0], [76.9, 252.0], [77.0, 252.0], [77.1, 252.0], [77.2, 253.0], [77.3, 253.0], [77.4, 253.0], [77.5, 253.0], [77.6, 253.0], [77.7, 253.0], [77.8, 253.0], [77.9, 253.0], [78.0, 253.0], [78.1, 253.0], [78.2, 253.0], [78.3, 253.0], [78.4, 253.0], [78.5, 253.0], [78.6, 254.0], [78.7, 254.0], [78.8, 254.0], [78.9, 254.0], [79.0, 254.0], [79.1, 254.0], [79.2, 254.0], [79.3, 254.0], [79.4, 254.0], [79.5, 254.0], [79.6, 254.0], [79.7, 254.0], [79.8, 254.0], [79.9, 255.0], [80.0, 255.0], [80.1, 255.0], [80.2, 255.0], [80.3, 255.0], [80.4, 255.0], [80.5, 255.0], [80.6, 255.0], [80.7, 255.0], [80.8, 255.0], [80.9, 255.0], [81.0, 255.0], [81.1, 255.0], [81.2, 255.0], [81.3, 256.0], [81.4, 256.0], [81.5, 256.0], [81.6, 256.0], [81.7, 256.0], [81.8, 256.0], [81.9, 256.0], [82.0, 256.0], [82.1, 256.0], [82.2, 256.0], [82.3, 256.0], [82.4, 257.0], [82.5, 257.0], [82.6, 257.0], [82.7, 257.0], [82.8, 257.0], [82.9, 257.0], [83.0, 257.0], [83.1, 257.0], [83.2, 257.0], [83.3, 257.0], [83.4, 257.0], [83.5, 258.0], [83.6, 258.0], [83.7, 258.0], [83.8, 258.0], [83.9, 258.0], [84.0, 258.0], [84.1, 258.0], [84.2, 258.0], [84.3, 258.0], [84.4, 259.0], [84.5, 259.0], [84.6, 259.0], [84.7, 259.0], [84.8, 259.0], [84.9, 259.0], [85.0, 259.0], [85.1, 259.0], [85.2, 259.0], [85.3, 260.0], [85.4, 260.0], [85.5, 260.0], [85.6, 260.0], [85.7, 260.0], [85.8, 260.0], [85.9, 260.0], [86.0, 260.0], [86.1, 261.0], [86.2, 261.0], [86.3, 261.0], [86.4, 261.0], [86.5, 261.0], [86.6, 261.0], [86.7, 261.0], [86.8, 261.0], [86.9, 262.0], [87.0, 262.0], [87.1, 262.0], [87.2, 262.0], [87.3, 262.0], [87.4, 262.0], [87.5, 263.0], [87.6, 263.0], [87.7, 263.0], [87.8, 263.0], [87.9, 263.0], [88.0, 263.0], [88.1, 263.0], [88.2, 264.0], [88.3, 264.0], [88.4, 264.0], [88.5, 264.0], [88.6, 264.0], [88.7, 265.0], [88.8, 265.0], [88.9, 265.0], [89.0, 265.0], [89.1, 265.0], [89.2, 266.0], [89.3, 266.0], [89.4, 266.0], [89.5, 266.0], [89.6, 266.0], [89.7, 267.0], [89.8, 267.0], [89.9, 267.0], [90.0, 267.0], [90.1, 268.0], [90.2, 268.0], [90.3, 268.0], [90.4, 268.0], [90.5, 268.0], [90.6, 269.0], [90.7, 269.0], [90.8, 269.0], [90.9, 269.0], [91.0, 270.0], [91.1, 270.0], [91.2, 270.0], [91.3, 271.0], [91.4, 271.0], [91.5, 271.0], [91.6, 272.0], [91.7, 272.0], [91.8, 272.0], [91.9, 273.0], [92.0, 273.0], [92.1, 273.0], [92.2, 274.0], [92.3, 274.0], [92.4, 274.0], [92.5, 275.0], [92.6, 275.0], [92.7, 275.0], [92.8, 276.0], [92.9, 276.0], [93.0, 277.0], [93.1, 277.0], [93.2, 278.0], [93.3, 278.0], [93.4, 279.0], [93.5, 279.0], [93.6, 279.0], [93.7, 280.0], [93.8, 280.0], [93.9, 281.0], [94.0, 281.0], [94.1, 282.0], [94.2, 283.0], [94.3, 283.0], [94.4, 284.0], [94.5, 284.0], [94.6, 285.0], [94.7, 285.0], [94.8, 286.0], [94.9, 286.0], [95.0, 287.0], [95.1, 287.0], [95.2, 288.0], [95.3, 288.0], [95.4, 289.0], [95.5, 290.0], [95.6, 290.0], [95.7, 291.0], [95.8, 291.0], [95.9, 292.0], [96.0, 293.0], [96.1, 293.0], [96.2, 294.0], [96.3, 294.0], [96.4, 295.0], [96.5, 296.0], [96.6, 297.0], [96.7, 298.0], [96.8, 298.0], [96.9, 299.0], [97.0, 300.0], [97.1, 301.0], [97.2, 302.0], [97.3, 303.0], [97.4, 304.0], [97.5, 305.0], [97.6, 306.0], [97.7, 307.0], [97.8, 308.0], [97.9, 309.0], [98.0, 310.0], [98.1, 311.0], [98.2, 312.0], [98.3, 313.0], [98.4, 314.0], [98.5, 315.0], [98.6, 316.0], [98.7, 318.0], [98.8, 319.0], [98.9, 321.0], [99.0, 322.0], [99.1, 324.0], [99.2, 326.0], [99.3, 328.0], [99.4, 332.0], [99.5, 336.0], [99.6, 340.0], [99.7, 345.0], [99.8, 350.0], [99.9, 357.0], [100.0, 374.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1396.0, "minX": 0.0, "maxY": 34633.0, "series": [{"data": [[0.0, 4426.0], [300.0, 1396.0], [100.0, 4913.0], [200.0, 34633.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45368.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 45368.0, "series": [{"data": [[0.0, 45368.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 97.50425496412512, "minX": 1.79138688E12, "maxY": 199.02923731352325, "series": [{"data": [[1.79138694E12, 199.02923731352325], [1.79138688E12, 97.50425496412512]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138694E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 19.72, "minX": 1.0, "maxY": 253.69841269841268, "series": [{"data": [[3.0, 48.5], [4.0, 20.8], [5.0, 19.72], [6.0, 31.194444444444446], [7.0, 20.22857142857143], [8.0, 22.42105263157895], [9.0, 25.82051282051282], [10.0, 21.760869565217398], [11.0, 31.620689655172413], [12.0, 21.52542372881355], [13.0, 23.647058823529406], [14.0, 30.622641509433958], [15.0, 28.499999999999996], [16.0, 50.85416666666664], [17.0, 34.91071428571429], [18.0, 38.37735849056604], [19.0, 46.97674418604651], [20.0, 35.58620689655172], [21.0, 33.81159420289855], [22.0, 31.000000000000004], [23.0, 44.42465753424657], [24.0, 36.159420289855085], [25.0, 37.041095890410965], [26.0, 45.35483870967743], [27.0, 42.63076923076921], [28.0, 47.393442622950815], [29.0, 50.985507246376805], [30.0, 44.13235294117648], [31.0, 44.29032258064517], [32.0, 61.749999999999986], [33.0, 57.38461538461538], [34.0, 54.93333333333332], [35.0, 68.29687499999999], [36.0, 65.13793103448278], [37.0, 69.18518518518519], [38.0, 62.08823529411763], [39.0, 60.69841269841269], [40.0, 73.89830508474574], [41.0, 72.98305084745762], [42.0, 61.726027397260275], [43.0, 60.67187499999999], [44.0, 57.88607594936708], [45.0, 59.918918918918926], [46.0, 65.19354838709675], [47.0, 84.13157894736841], [48.0, 85.25000000000004], [49.0, 83.93650793650794], [50.0, 73.52542372881355], [51.0, 73.50000000000004], [52.0, 74.76119402985073], [53.0, 80.16], [54.0, 91.17241379310344], [55.0, 93.75862068965515], [56.0, 87.58208955223883], [57.0, 89.68918918918916], [58.0, 91.40000000000003], [59.0, 95.8529411764706], [60.0, 85.83333333333333], [61.0, 90.63768115942031], [62.0, 96.55384615384614], [63.0, 107.23437499999999], [64.0, 98.44615384615388], [65.0, 99.64788732394366], [66.0, 92.86666666666667], [67.0, 91.83333333333333], [68.0, 88.47058823529414], [69.0, 89.93749999999999], [70.0, 90.1232876712329], [71.0, 90.20930232558138], [72.0, 85.54545454545453], [73.0, 90.37634408602148], [74.0, 92.54054054054053], [75.0, 100.5866666666667], [76.0, 102.575], [77.0, 97.77215189873417], [78.0, 112.02777777777777], [79.0, 111.64179104477614], [80.0, 113.53947368421052], [81.0, 108.84722222222221], [82.0, 111.3670886075949], [83.0, 112.46478873239435], [84.0, 112.36144578313252], [85.0, 101.45121951219515], [86.0, 109.06410256410253], [87.0, 111.42105263157895], [88.0, 112.41095890410962], [89.0, 134.1891891891892], [90.0, 135.05797101449267], [91.0, 124.85000000000002], [92.0, 130.35064935064938], [93.0, 120.53086419753089], [94.0, 116.73563218390804], [95.0, 120.12195121951221], [96.0, 132.20895522388065], [97.0, 144.15384615384616], [98.0, 141.57333333333332], [99.0, 126.96296296296299], [100.0, 127.1139240506329], [101.0, 145.83333333333323], [102.0, 158.03076923076927], [103.0, 157.4683544303797], [104.0, 157.60000000000002], [105.0, 171.85714285714283], [106.0, 171.61904761904768], [107.0, 162.015625], [108.0, 168.90000000000012], [109.0, 179.4117647058824], [110.0, 180.93939393939394], [111.0, 186.94230769230765], [112.0, 199.98275862068965], [113.0, 200.52631578947373], [114.0, 198.67213114754094], [115.0, 192.77966101694918], [116.0, 199.91935483870958], [117.0, 210.80392156862743], [118.0, 212.8653846153846], [119.0, 228.97826086956525], [120.0, 232.93548387096772], [121.0, 199.02898550724638], [122.0, 175.62162162162159], [123.0, 198.33333333333331], [124.0, 222.16949152542372], [125.0, 229.7454545454546], [126.0, 223.24074074074073], [127.0, 223.5342465753425], [128.0, 219.90196078431373], [129.0, 227.12765957446808], [130.0, 252.30434782608694], [131.0, 253.69841269841268], [132.0, 216.97499999999997], [133.0, 179.81578947368416], [134.0, 175.49333333333334], [135.0, 181.52054794520546], [136.0, 184.17808219178085], [137.0, 196.08333333333337], [138.0, 214.00000000000006], [139.0, 216.74193548387103], [140.0, 210.859375], [141.0, 210.9565217391305], [142.0, 206.7384615384616], [143.0, 205.39999999999998], [144.0, 203.36619718309856], [145.0, 200.0759493670886], [146.0, 187.98795180722894], [147.0, 177.59722222222223], [148.0, 184.04761904761904], [149.0, 184.25974025974023], [150.0, 197.67692307692315], [151.0, 221.359375], [152.0, 229.31506849315065], [153.0, 205.55696202531644], [154.0, 198.41333333333336], [155.0, 202.97530864197535], [156.0, 207.51470588235293], [157.0, 207.8875], [158.0, 199.74358974358964], [159.0, 194.36904761904756], [160.0, 197.32876712328766], [161.0, 208.0555555555556], [162.0, 210.6190476190477], [163.0, 201.13580246913585], [164.0, 193.7356321839081], [165.0, 188.04651162790702], [166.0, 189.67532467532465], [167.0, 195.85393258426967], [168.0, 192.2317073170732], [169.0, 190.75294117647059], [170.0, 197.09523809523807], [171.0, 203.6493506493506], [172.0, 205.31914893617022], [173.0, 195.8249999999999], [174.0, 195.04938271604937], [175.0, 197.66666666666663], [176.0, 199.8815789473684], [177.0, 200.61176470588236], [178.0, 209.39726027397256], [179.0, 217.11111111111114], [180.0, 215.66666666666669], [181.0, 211.22093023255823], [182.0, 211.07594936708864], [183.0, 215.22619047619048], [184.0, 217.38372093023258], [185.0, 213.68000000000004], [186.0, 216.84931506849313], [187.0, 226.73417721518982], [188.0, 230.2666666666667], [189.0, 223.375], [190.0, 230.90140845070422], [191.0, 241.6056338028169], [192.0, 247.6438356164383], [193.0, 242.4523809523809], [194.0, 233.18181818181816], [195.0, 240.69565217391306], [196.0, 250.34615384615384], [197.0, 246.51250000000002], [198.0, 237.2285714285714], [199.0, 239.24358974358975], [200.0, 251.03467336683505], [1.0, 155.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[172.2068418268397, 219.78379033680102]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 61528.13333333333, "minX": 1.79138688E12, "maxY": 1354956.3166666667, "series": [{"data": [[1.79138694E12, 1354956.3166666667], [1.79138688E12, 486511.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79138694E12, 171360.93333333332], [1.79138688E12, 61528.13333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138694E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135.50225262806634, "minX": 1.79138688E12, "maxY": 250.04556347732253, "series": [{"data": [[1.79138694E12, 250.04556347732253], [1.79138688E12, 135.50225262806634]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138694E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 135.27965960287037, "minX": 1.79138688E12, "maxY": 249.83194535977412, "series": [{"data": [[1.79138694E12, 249.83194535977412], [1.79138688E12, 135.27965960287037]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138694E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0012282068180456546, "minX": 1.79138688E12, "maxY": 0.04313365593192048, "series": [{"data": [[1.79138694E12, 0.0012282068180456546], [1.79138688E12, 0.04313365593192048]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138694E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.79138688E12, "maxY": 374.0, "series": [{"data": [[1.79138694E12, 374.0], [1.79138688E12, 286.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79138694E12, 150.0], [1.79138688E12, 17.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79138694E12, 273.0], [1.79138688E12, 212.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79138694E12, 322.0], [1.79138688E12, 243.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79138694E12, 246.0], [1.79138688E12, 130.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79138694E12, 291.0], [1.79138688E12, 221.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138694E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 21.0, "minX": 17.0, "maxY": 292.0, "series": [{"data": [[558.0, 204.0], [552.0, 220.0], [583.0, 63.0], [633.0, 41.0], [639.0, 86.0], [621.0, 166.0], [671.0, 67.0], [646.0, 292.0], [688.0, 197.0], [695.0, 286.0], [682.0, 291.0], [714.0, 92.0], [734.0, 196.0], [717.0, 280.0], [711.0, 282.0], [731.0, 275.0], [723.0, 244.0], [752.0, 97.0], [742.0, 119.0], [761.0, 203.0], [767.0, 264.0], [797.0, 244.0], [771.0, 267.0], [787.0, 250.0], [773.0, 258.0], [786.0, 256.0], [783.0, 248.0], [798.0, 251.0], [825.0, 241.0], [812.0, 237.0], [828.0, 239.5], [822.0, 242.0], [823.0, 242.0], [805.0, 253.0], [824.0, 243.0], [809.0, 244.0], [810.0, 248.0], [808.0, 246.0], [803.0, 245.0], [815.0, 245.0], [804.0, 249.0], [827.0, 242.0], [831.0, 241.0], [818.0, 245.0], [845.0, 195.0], [856.0, 204.0], [846.0, 237.0], [863.0, 230.0], [847.0, 235.0], [834.0, 241.0], [868.0, 231.0], [17.0, 21.0], [370.0, 21.0], [508.0, 32.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 868.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 21.0, "minX": 17.0, "maxY": 291.5, "series": [{"data": [[558.0, 204.0], [552.0, 220.0], [583.0, 62.0], [633.0, 41.0], [639.0, 86.0], [621.0, 166.0], [671.0, 67.0], [646.0, 291.5], [688.0, 196.0], [695.0, 286.0], [682.0, 289.5], [714.0, 91.0], [734.0, 196.0], [717.0, 280.0], [711.0, 282.0], [731.0, 275.0], [723.0, 243.0], [752.0, 97.0], [742.0, 119.0], [761.0, 203.0], [767.0, 264.0], [797.0, 244.0], [771.0, 267.0], [787.0, 250.0], [773.0, 257.0], [786.0, 255.0], [783.0, 248.0], [798.0, 251.0], [825.0, 241.0], [812.0, 237.0], [828.0, 239.0], [822.0, 242.0], [823.0, 242.0], [805.0, 253.0], [824.0, 242.0], [809.0, 243.0], [810.0, 248.0], [808.0, 246.0], [803.0, 245.0], [815.0, 245.0], [804.0, 249.0], [827.0, 242.0], [831.0, 241.0], [818.0, 245.0], [845.0, 195.0], [856.0, 204.0], [846.0, 237.0], [863.0, 230.0], [847.0, 235.0], [834.0, 241.0], [868.0, 231.0], [17.0, 21.0], [370.0, 21.0], [508.0, 32.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 868.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 202.8, "minX": 1.79138688E12, "maxY": 553.3333333333334, "series": [{"data": [[1.79138694E12, 553.3333333333334], [1.79138688E12, 202.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138694E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 199.76666666666668, "minX": 1.79138688E12, "maxY": 556.3666666666667, "series": [{"data": [[1.79138694E12, 556.3666666666667], [1.79138688E12, 199.76666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138694E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 199.76666666666668, "minX": 1.79138688E12, "maxY": 556.3666666666667, "series": [{"data": [[1.79138694E12, 556.3666666666667], [1.79138688E12, 199.76666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138694E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 199.76666666666668, "minX": 1.79138688E12, "maxY": 556.3666666666667, "series": [{"data": [[1.79138694E12, 556.3666666666667], [1.79138688E12, 199.76666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138694E12, "title": "Total Transactions Per Second"}},
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

