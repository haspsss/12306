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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 282.0, "series": [{"data": [[0.0, 18.0], [0.1, 19.0], [0.2, 21.0], [0.3, 22.0], [0.4, 23.0], [0.5, 23.0], [0.6, 24.0], [0.7, 25.0], [0.8, 26.0], [0.9, 26.0], [1.0, 27.0], [1.1, 27.0], [1.2, 28.0], [1.3, 29.0], [1.4, 29.0], [1.5, 30.0], [1.6, 31.0], [1.7, 31.0], [1.8, 32.0], [1.9, 33.0], [2.0, 34.0], [2.1, 34.0], [2.2, 35.0], [2.3, 36.0], [2.4, 37.0], [2.5, 37.0], [2.6, 38.0], [2.7, 39.0], [2.8, 40.0], [2.9, 40.0], [3.0, 41.0], [3.1, 42.0], [3.2, 43.0], [3.3, 43.0], [3.4, 44.0], [3.5, 45.0], [3.6, 46.0], [3.7, 48.0], [3.8, 48.0], [3.9, 50.0], [4.0, 50.0], [4.1, 51.0], [4.2, 52.0], [4.3, 53.0], [4.4, 53.0], [4.5, 54.0], [4.6, 55.0], [4.7, 56.0], [4.8, 58.0], [4.9, 59.0], [5.0, 61.0], [5.1, 63.0], [5.2, 64.0], [5.3, 66.0], [5.4, 67.0], [5.5, 68.0], [5.6, 70.0], [5.7, 71.0], [5.8, 72.0], [5.9, 72.0], [6.0, 73.0], [6.1, 74.0], [6.2, 75.0], [6.3, 75.0], [6.4, 76.0], [6.5, 76.0], [6.6, 77.0], [6.7, 78.0], [6.8, 78.0], [6.9, 79.0], [7.0, 80.0], [7.1, 80.0], [7.2, 81.0], [7.3, 81.0], [7.4, 82.0], [7.5, 82.0], [7.6, 83.0], [7.7, 83.0], [7.8, 84.0], [7.9, 84.0], [8.0, 85.0], [8.1, 86.0], [8.2, 86.0], [8.3, 87.0], [8.4, 87.0], [8.5, 88.0], [8.6, 88.0], [8.7, 89.0], [8.8, 90.0], [8.9, 90.0], [9.0, 91.0], [9.1, 92.0], [9.2, 93.0], [9.3, 94.0], [9.4, 95.0], [9.5, 95.0], [9.6, 97.0], [9.7, 98.0], [9.8, 99.0], [9.9, 101.0], [10.0, 102.0], [10.1, 103.0], [10.2, 104.0], [10.3, 105.0], [10.4, 105.0], [10.5, 106.0], [10.6, 106.0], [10.7, 106.0], [10.8, 107.0], [10.9, 107.0], [11.0, 107.0], [11.1, 108.0], [11.2, 108.0], [11.3, 108.0], [11.4, 108.0], [11.5, 108.0], [11.6, 109.0], [11.7, 109.0], [11.8, 109.0], [11.9, 109.0], [12.0, 109.0], [12.1, 109.0], [12.2, 110.0], [12.3, 110.0], [12.4, 110.0], [12.5, 110.0], [12.6, 110.0], [12.7, 110.0], [12.8, 110.0], [12.9, 110.0], [13.0, 110.0], [13.1, 111.0], [13.2, 111.0], [13.3, 111.0], [13.4, 111.0], [13.5, 111.0], [13.6, 111.0], [13.7, 111.0], [13.8, 111.0], [13.9, 111.0], [14.0, 111.0], [14.1, 111.0], [14.2, 111.0], [14.3, 112.0], [14.4, 112.0], [14.5, 112.0], [14.6, 112.0], [14.7, 112.0], [14.8, 112.0], [14.9, 112.0], [15.0, 112.0], [15.1, 112.0], [15.2, 112.0], [15.3, 112.0], [15.4, 112.0], [15.5, 112.0], [15.6, 112.0], [15.7, 113.0], [15.8, 113.0], [15.9, 113.0], [16.0, 113.0], [16.1, 113.0], [16.2, 113.0], [16.3, 113.0], [16.4, 113.0], [16.5, 113.0], [16.6, 113.0], [16.7, 113.0], [16.8, 113.0], [16.9, 113.0], [17.0, 113.0], [17.1, 113.0], [17.2, 113.0], [17.3, 113.0], [17.4, 113.0], [17.5, 114.0], [17.6, 114.0], [17.7, 114.0], [17.8, 114.0], [17.9, 114.0], [18.0, 114.0], [18.1, 114.0], [18.2, 114.0], [18.3, 114.0], [18.4, 114.0], [18.5, 114.0], [18.6, 114.0], [18.7, 114.0], [18.8, 114.0], [18.9, 114.0], [19.0, 114.0], [19.1, 114.0], [19.2, 114.0], [19.3, 114.0], [19.4, 114.0], [19.5, 114.0], [19.6, 114.0], [19.7, 114.0], [19.8, 115.0], [19.9, 115.0], [20.0, 115.0], [20.1, 115.0], [20.2, 115.0], [20.3, 115.0], [20.4, 115.0], [20.5, 115.0], [20.6, 115.0], [20.7, 115.0], [20.8, 115.0], [20.9, 115.0], [21.0, 115.0], [21.1, 115.0], [21.2, 115.0], [21.3, 115.0], [21.4, 115.0], [21.5, 115.0], [21.6, 115.0], [21.7, 115.0], [21.8, 115.0], [21.9, 115.0], [22.0, 115.0], [22.1, 115.0], [22.2, 115.0], [22.3, 115.0], [22.4, 115.0], [22.5, 116.0], [22.6, 116.0], [22.7, 116.0], [22.8, 116.0], [22.9, 116.0], [23.0, 116.0], [23.1, 116.0], [23.2, 116.0], [23.3, 116.0], [23.4, 116.0], [23.5, 116.0], [23.6, 116.0], [23.7, 116.0], [23.8, 116.0], [23.9, 116.0], [24.0, 116.0], [24.1, 116.0], [24.2, 116.0], [24.3, 116.0], [24.4, 116.0], [24.5, 116.0], [24.6, 116.0], [24.7, 116.0], [24.8, 116.0], [24.9, 116.0], [25.0, 116.0], [25.1, 116.0], [25.2, 116.0], [25.3, 116.0], [25.4, 116.0], [25.5, 116.0], [25.6, 116.0], [25.7, 116.0], [25.8, 117.0], [25.9, 117.0], [26.0, 117.0], [26.1, 117.0], [26.2, 117.0], [26.3, 117.0], [26.4, 117.0], [26.5, 117.0], [26.6, 117.0], [26.7, 117.0], [26.8, 117.0], [26.9, 117.0], [27.0, 117.0], [27.1, 117.0], [27.2, 117.0], [27.3, 117.0], [27.4, 117.0], [27.5, 117.0], [27.6, 117.0], [27.7, 117.0], [27.8, 117.0], [27.9, 117.0], [28.0, 117.0], [28.1, 117.0], [28.2, 117.0], [28.3, 117.0], [28.4, 117.0], [28.5, 117.0], [28.6, 117.0], [28.7, 117.0], [28.8, 117.0], [28.9, 117.0], [29.0, 117.0], [29.1, 117.0], [29.2, 117.0], [29.3, 117.0], [29.4, 118.0], [29.5, 118.0], [29.6, 118.0], [29.7, 118.0], [29.8, 118.0], [29.9, 118.0], [30.0, 118.0], [30.1, 118.0], [30.2, 118.0], [30.3, 118.0], [30.4, 118.0], [30.5, 118.0], [30.6, 118.0], [30.7, 118.0], [30.8, 118.0], [30.9, 118.0], [31.0, 118.0], [31.1, 118.0], [31.2, 118.0], [31.3, 118.0], [31.4, 118.0], [31.5, 118.0], [31.6, 118.0], [31.7, 118.0], [31.8, 118.0], [31.9, 118.0], [32.0, 118.0], [32.1, 118.0], [32.2, 118.0], [32.3, 118.0], [32.4, 118.0], [32.5, 118.0], [32.6, 118.0], [32.7, 118.0], [32.8, 118.0], [32.9, 118.0], [33.0, 118.0], [33.1, 119.0], [33.2, 119.0], [33.3, 119.0], [33.4, 119.0], [33.5, 119.0], [33.6, 119.0], [33.7, 119.0], [33.8, 119.0], [33.9, 119.0], [34.0, 119.0], [34.1, 119.0], [34.2, 119.0], [34.3, 119.0], [34.4, 119.0], [34.5, 119.0], [34.6, 119.0], [34.7, 119.0], [34.8, 119.0], [34.9, 119.0], [35.0, 119.0], [35.1, 119.0], [35.2, 119.0], [35.3, 119.0], [35.4, 119.0], [35.5, 119.0], [35.6, 119.0], [35.7, 119.0], [35.8, 119.0], [35.9, 119.0], [36.0, 119.0], [36.1, 119.0], [36.2, 119.0], [36.3, 119.0], [36.4, 119.0], [36.5, 119.0], [36.6, 119.0], [36.7, 119.0], [36.8, 119.0], [36.9, 119.0], [37.0, 119.0], [37.1, 119.0], [37.2, 120.0], [37.3, 120.0], [37.4, 120.0], [37.5, 120.0], [37.6, 120.0], [37.7, 120.0], [37.8, 120.0], [37.9, 120.0], [38.0, 120.0], [38.1, 120.0], [38.2, 120.0], [38.3, 120.0], [38.4, 120.0], [38.5, 120.0], [38.6, 120.0], [38.7, 120.0], [38.8, 120.0], [38.9, 120.0], [39.0, 120.0], [39.1, 120.0], [39.2, 120.0], [39.3, 120.0], [39.4, 120.0], [39.5, 120.0], [39.6, 120.0], [39.7, 120.0], [39.8, 120.0], [39.9, 120.0], [40.0, 120.0], [40.1, 120.0], [40.2, 120.0], [40.3, 120.0], [40.4, 120.0], [40.5, 120.0], [40.6, 120.0], [40.7, 120.0], [40.8, 120.0], [40.9, 120.0], [41.0, 120.0], [41.1, 120.0], [41.2, 120.0], [41.3, 121.0], [41.4, 121.0], [41.5, 121.0], [41.6, 121.0], [41.7, 121.0], [41.8, 121.0], [41.9, 121.0], [42.0, 121.0], [42.1, 121.0], [42.2, 121.0], [42.3, 121.0], [42.4, 121.0], [42.5, 121.0], [42.6, 121.0], [42.7, 121.0], [42.8, 121.0], [42.9, 121.0], [43.0, 121.0], [43.1, 121.0], [43.2, 121.0], [43.3, 121.0], [43.4, 121.0], [43.5, 121.0], [43.6, 121.0], [43.7, 121.0], [43.8, 121.0], [43.9, 121.0], [44.0, 121.0], [44.1, 121.0], [44.2, 121.0], [44.3, 121.0], [44.4, 121.0], [44.5, 121.0], [44.6, 121.0], [44.7, 121.0], [44.8, 121.0], [44.9, 121.0], [45.0, 121.0], [45.1, 121.0], [45.2, 121.0], [45.3, 121.0], [45.4, 121.0], [45.5, 121.0], [45.6, 121.0], [45.7, 122.0], [45.8, 122.0], [45.9, 122.0], [46.0, 122.0], [46.1, 122.0], [46.2, 122.0], [46.3, 122.0], [46.4, 122.0], [46.5, 122.0], [46.6, 122.0], [46.7, 122.0], [46.8, 122.0], [46.9, 122.0], [47.0, 122.0], [47.1, 122.0], [47.2, 122.0], [47.3, 122.0], [47.4, 122.0], [47.5, 122.0], [47.6, 122.0], [47.7, 122.0], [47.8, 122.0], [47.9, 122.0], [48.0, 122.0], [48.1, 122.0], [48.2, 122.0], [48.3, 122.0], [48.4, 122.0], [48.5, 122.0], [48.6, 122.0], [48.7, 122.0], [48.8, 122.0], [48.9, 122.0], [49.0, 122.0], [49.1, 122.0], [49.2, 122.0], [49.3, 122.0], [49.4, 122.0], [49.5, 122.0], [49.6, 122.0], [49.7, 122.0], [49.8, 123.0], [49.9, 123.0], [50.0, 123.0], [50.1, 123.0], [50.2, 123.0], [50.3, 123.0], [50.4, 123.0], [50.5, 123.0], [50.6, 123.0], [50.7, 123.0], [50.8, 123.0], [50.9, 123.0], [51.0, 123.0], [51.1, 123.0], [51.2, 123.0], [51.3, 123.0], [51.4, 123.0], [51.5, 123.0], [51.6, 123.0], [51.7, 123.0], [51.8, 123.0], [51.9, 123.0], [52.0, 123.0], [52.1, 123.0], [52.2, 123.0], [52.3, 123.0], [52.4, 123.0], [52.5, 123.0], [52.6, 123.0], [52.7, 123.0], [52.8, 123.0], [52.9, 123.0], [53.0, 123.0], [53.1, 123.0], [53.2, 123.0], [53.3, 123.0], [53.4, 123.0], [53.5, 123.0], [53.6, 123.0], [53.7, 123.0], [53.8, 123.0], [53.9, 124.0], [54.0, 124.0], [54.1, 124.0], [54.2, 124.0], [54.3, 124.0], [54.4, 124.0], [54.5, 124.0], [54.6, 124.0], [54.7, 124.0], [54.8, 124.0], [54.9, 124.0], [55.0, 124.0], [55.1, 124.0], [55.2, 124.0], [55.3, 124.0], [55.4, 124.0], [55.5, 124.0], [55.6, 124.0], [55.7, 124.0], [55.8, 124.0], [55.9, 124.0], [56.0, 124.0], [56.1, 124.0], [56.2, 124.0], [56.3, 124.0], [56.4, 124.0], [56.5, 124.0], [56.6, 124.0], [56.7, 124.0], [56.8, 124.0], [56.9, 124.0], [57.0, 124.0], [57.1, 124.0], [57.2, 124.0], [57.3, 124.0], [57.4, 124.0], [57.5, 124.0], [57.6, 124.0], [57.7, 125.0], [57.8, 125.0], [57.9, 125.0], [58.0, 125.0], [58.1, 125.0], [58.2, 125.0], [58.3, 125.0], [58.4, 125.0], [58.5, 125.0], [58.6, 125.0], [58.7, 125.0], [58.8, 125.0], [58.9, 125.0], [59.0, 125.0], [59.1, 125.0], [59.2, 125.0], [59.3, 125.0], [59.4, 125.0], [59.5, 125.0], [59.6, 125.0], [59.7, 125.0], [59.8, 125.0], [59.9, 125.0], [60.0, 125.0], [60.1, 125.0], [60.2, 125.0], [60.3, 125.0], [60.4, 125.0], [60.5, 125.0], [60.6, 125.0], [60.7, 125.0], [60.8, 125.0], [60.9, 125.0], [61.0, 125.0], [61.1, 125.0], [61.2, 125.0], [61.3, 125.0], [61.4, 125.0], [61.5, 126.0], [61.6, 126.0], [61.7, 126.0], [61.8, 126.0], [61.9, 126.0], [62.0, 126.0], [62.1, 126.0], [62.2, 126.0], [62.3, 126.0], [62.4, 126.0], [62.5, 126.0], [62.6, 126.0], [62.7, 126.0], [62.8, 126.0], [62.9, 126.0], [63.0, 126.0], [63.1, 126.0], [63.2, 126.0], [63.3, 126.0], [63.4, 126.0], [63.5, 126.0], [63.6, 126.0], [63.7, 126.0], [63.8, 126.0], [63.9, 126.0], [64.0, 126.0], [64.1, 126.0], [64.2, 126.0], [64.3, 126.0], [64.4, 126.0], [64.5, 126.0], [64.6, 126.0], [64.7, 126.0], [64.8, 127.0], [64.9, 127.0], [65.0, 127.0], [65.1, 127.0], [65.2, 127.0], [65.3, 127.0], [65.4, 127.0], [65.5, 127.0], [65.6, 127.0], [65.7, 127.0], [65.8, 127.0], [65.9, 127.0], [66.0, 127.0], [66.1, 127.0], [66.2, 127.0], [66.3, 127.0], [66.4, 127.0], [66.5, 127.0], [66.6, 127.0], [66.7, 127.0], [66.8, 127.0], [66.9, 127.0], [67.0, 127.0], [67.1, 127.0], [67.2, 127.0], [67.3, 127.0], [67.4, 127.0], [67.5, 127.0], [67.6, 127.0], [67.7, 127.0], [67.8, 127.0], [67.9, 128.0], [68.0, 128.0], [68.1, 128.0], [68.2, 128.0], [68.3, 128.0], [68.4, 128.0], [68.5, 128.0], [68.6, 128.0], [68.7, 128.0], [68.8, 128.0], [68.9, 128.0], [69.0, 128.0], [69.1, 128.0], [69.2, 128.0], [69.3, 128.0], [69.4, 128.0], [69.5, 128.0], [69.6, 128.0], [69.7, 128.0], [69.8, 128.0], [69.9, 128.0], [70.0, 128.0], [70.1, 128.0], [70.2, 128.0], [70.3, 128.0], [70.4, 128.0], [70.5, 128.0], [70.6, 129.0], [70.7, 129.0], [70.8, 129.0], [70.9, 129.0], [71.0, 129.0], [71.1, 129.0], [71.2, 129.0], [71.3, 129.0], [71.4, 129.0], [71.5, 129.0], [71.6, 129.0], [71.7, 129.0], [71.8, 129.0], [71.9, 129.0], [72.0, 129.0], [72.1, 129.0], [72.2, 129.0], [72.3, 129.0], [72.4, 129.0], [72.5, 129.0], [72.6, 129.0], [72.7, 129.0], [72.8, 129.0], [72.9, 129.0], [73.0, 130.0], [73.1, 130.0], [73.2, 130.0], [73.3, 130.0], [73.4, 130.0], [73.5, 130.0], [73.6, 130.0], [73.7, 130.0], [73.8, 130.0], [73.9, 130.0], [74.0, 130.0], [74.1, 130.0], [74.2, 130.0], [74.3, 130.0], [74.4, 130.0], [74.5, 130.0], [74.6, 130.0], [74.7, 130.0], [74.8, 130.0], [74.9, 130.0], [75.0, 130.0], [75.1, 130.0], [75.2, 130.0], [75.3, 131.0], [75.4, 131.0], [75.5, 131.0], [75.6, 131.0], [75.7, 131.0], [75.8, 131.0], [75.9, 131.0], [76.0, 131.0], [76.1, 131.0], [76.2, 131.0], [76.3, 131.0], [76.4, 131.0], [76.5, 131.0], [76.6, 131.0], [76.7, 131.0], [76.8, 131.0], [76.9, 131.0], [77.0, 131.0], [77.1, 131.0], [77.2, 132.0], [77.3, 132.0], [77.4, 132.0], [77.5, 132.0], [77.6, 132.0], [77.7, 132.0], [77.8, 132.0], [77.9, 132.0], [78.0, 132.0], [78.1, 132.0], [78.2, 132.0], [78.3, 132.0], [78.4, 132.0], [78.5, 132.0], [78.6, 132.0], [78.7, 132.0], [78.8, 132.0], [78.9, 133.0], [79.0, 133.0], [79.1, 133.0], [79.2, 133.0], [79.3, 133.0], [79.4, 133.0], [79.5, 133.0], [79.6, 133.0], [79.7, 133.0], [79.8, 133.0], [79.9, 133.0], [80.0, 133.0], [80.1, 133.0], [80.2, 133.0], [80.3, 133.0], [80.4, 133.0], [80.5, 133.0], [80.6, 134.0], [80.7, 134.0], [80.8, 134.0], [80.9, 134.0], [81.0, 134.0], [81.1, 134.0], [81.2, 134.0], [81.3, 134.0], [81.4, 134.0], [81.5, 134.0], [81.6, 134.0], [81.7, 134.0], [81.8, 134.0], [81.9, 135.0], [82.0, 135.0], [82.1, 135.0], [82.2, 135.0], [82.3, 135.0], [82.4, 135.0], [82.5, 135.0], [82.6, 135.0], [82.7, 135.0], [82.8, 135.0], [82.9, 135.0], [83.0, 135.0], [83.1, 136.0], [83.2, 136.0], [83.3, 136.0], [83.4, 136.0], [83.5, 136.0], [83.6, 136.0], [83.7, 136.0], [83.8, 136.0], [83.9, 136.0], [84.0, 136.0], [84.1, 136.0], [84.2, 137.0], [84.3, 137.0], [84.4, 137.0], [84.5, 137.0], [84.6, 137.0], [84.7, 137.0], [84.8, 137.0], [84.9, 137.0], [85.0, 137.0], [85.1, 138.0], [85.2, 138.0], [85.3, 138.0], [85.4, 138.0], [85.5, 138.0], [85.6, 138.0], [85.7, 138.0], [85.8, 138.0], [85.9, 139.0], [86.0, 139.0], [86.1, 139.0], [86.2, 139.0], [86.3, 139.0], [86.4, 139.0], [86.5, 139.0], [86.6, 139.0], [86.7, 139.0], [86.8, 140.0], [86.9, 140.0], [87.0, 140.0], [87.1, 140.0], [87.2, 140.0], [87.3, 140.0], [87.4, 140.0], [87.5, 140.0], [87.6, 141.0], [87.7, 141.0], [87.8, 141.0], [87.9, 141.0], [88.0, 141.0], [88.1, 141.0], [88.2, 142.0], [88.3, 142.0], [88.4, 142.0], [88.5, 142.0], [88.6, 142.0], [88.7, 142.0], [88.8, 142.0], [88.9, 142.0], [89.0, 143.0], [89.1, 143.0], [89.2, 143.0], [89.3, 143.0], [89.4, 143.0], [89.5, 144.0], [89.6, 144.0], [89.7, 144.0], [89.8, 144.0], [89.9, 144.0], [90.0, 144.0], [90.1, 144.0], [90.2, 145.0], [90.3, 145.0], [90.4, 145.0], [90.5, 145.0], [90.6, 145.0], [90.7, 146.0], [90.8, 146.0], [90.9, 146.0], [91.0, 146.0], [91.1, 146.0], [91.2, 146.0], [91.3, 147.0], [91.4, 147.0], [91.5, 147.0], [91.6, 147.0], [91.7, 148.0], [91.8, 148.0], [91.9, 148.0], [92.0, 148.0], [92.1, 148.0], [92.2, 149.0], [92.3, 149.0], [92.4, 149.0], [92.5, 149.0], [92.6, 149.0], [92.7, 150.0], [92.8, 150.0], [92.9, 150.0], [93.0, 150.0], [93.1, 151.0], [93.2, 151.0], [93.3, 151.0], [93.4, 151.0], [93.5, 151.0], [93.6, 152.0], [93.7, 152.0], [93.8, 152.0], [93.9, 152.0], [94.0, 153.0], [94.1, 153.0], [94.2, 153.0], [94.3, 153.0], [94.4, 154.0], [94.5, 154.0], [94.6, 154.0], [94.7, 155.0], [94.8, 155.0], [94.9, 155.0], [95.0, 155.0], [95.1, 156.0], [95.2, 156.0], [95.3, 156.0], [95.4, 157.0], [95.5, 157.0], [95.6, 157.0], [95.7, 158.0], [95.8, 158.0], [95.9, 158.0], [96.0, 159.0], [96.1, 159.0], [96.2, 160.0], [96.3, 160.0], [96.4, 160.0], [96.5, 161.0], [96.6, 161.0], [96.7, 162.0], [96.8, 162.0], [96.9, 162.0], [97.0, 163.0], [97.1, 163.0], [97.2, 164.0], [97.3, 164.0], [97.4, 165.0], [97.5, 165.0], [97.6, 166.0], [97.7, 166.0], [97.8, 167.0], [97.9, 168.0], [98.0, 168.0], [98.1, 169.0], [98.2, 169.0], [98.3, 170.0], [98.4, 171.0], [98.5, 172.0], [98.6, 173.0], [98.7, 174.0], [98.8, 175.0], [98.9, 176.0], [99.0, 177.0], [99.1, 179.0], [99.2, 180.0], [99.3, 182.0], [99.4, 183.0], [99.5, 186.0], [99.6, 188.0], [99.7, 190.0], [99.8, 197.0], [99.9, 224.0], [100.0, 282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 82.0, "minX": 0.0, "maxY": 40957.0, "series": [{"data": [[0.0, 4476.0], [100.0, 40957.0], [200.0, 82.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45515.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 45515.0, "series": [{"data": [[0.0, 45515.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 24.88471615720529, "minX": 1.79138718E12, "maxY": 97.1990977443607, "series": [{"data": [[1.79138718E12, 24.88471615720529], [1.79138724E12, 97.1990977443607]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138724E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 19.142857142857142, "minX": 2.0, "maxY": 147.05128205128204, "series": [{"data": [[2.0, 58.5], [3.0, 19.142857142857142], [4.0, 31.857142857142854], [5.0, 20.166666666666664], [6.0, 19.551724137931036], [7.0, 21.176470588235293], [8.0, 22.34375], [9.0, 36.81249999999999], [10.0, 28.300000000000004], [11.0, 28.5625], [12.0, 31.666666666666668], [13.0, 23.354838709677416], [14.0, 30.892857142857146], [15.0, 27.83673469387756], [16.0, 28.0], [17.0, 32.63235294117648], [18.0, 29.28571428571428], [19.0, 29.47457627118644], [20.0, 30.942028985507246], [21.0, 33.83582089552238], [22.0, 39.4025974025974], [23.0, 35.83098591549295], [24.0, 39.968750000000014], [25.0, 37.99999999999999], [26.0, 39.4142857142857], [27.0, 38.06578947368419], [28.0, 47.13698630136986], [29.0, 44.63636363636365], [30.0, 43.83823529411766], [31.0, 44.985714285714295], [32.0, 47.88888888888892], [33.0, 52.126984126984134], [34.0, 48.39189189189189], [35.0, 55.33898305084746], [36.0, 59.55405405405406], [37.0, 51.46478873239436], [38.0, 53.30379746835441], [39.0, 54.14084507042253], [40.0, 53.30769230769231], [41.0, 62.086206896551715], [42.0, 71.30882352941175], [43.0, 75.84126984126983], [44.0, 62.57894736842106], [45.0, 66.30158730158729], [46.0, 72.14925373134328], [47.0, 82.62295081967213], [48.0, 77.28333333333333], [49.0, 73.80821917808218], [50.0, 79.18750000000003], [51.0, 78.43548387096773], [52.0, 87.92307692307695], [53.0, 84.03225806451611], [54.0, 80.5714285714286], [55.0, 74.41666666666666], [56.0, 78.99999999999999], [57.0, 76.02777777777779], [58.0, 81.45833333333336], [59.0, 90.12698412698414], [60.0, 100.5573770491803], [61.0, 85.77215189873417], [62.0, 83.85135135135137], [63.0, 90.67142857142858], [64.0, 85.80821917808214], [65.0, 86.1168831168831], [66.0, 82.74418604651163], [67.0, 91.99999999999997], [68.0, 96.44705882352942], [69.0, 87.67088607594937], [70.0, 89.38461538461537], [71.0, 86.86904761904763], [72.0, 93.83999999999997], [73.0, 98.13888888888886], [74.0, 105.69999999999996], [75.0, 117.77777777777773], [76.0, 117.34375000000001], [77.0, 118.03389830508475], [78.0, 134.8], [79.0, 134.45614035087718], [80.0, 130.99999999999991], [81.0, 131.36231884057972], [82.0, 122.8], [83.0, 107.07999999999997], [84.0, 112.62500000000001], [85.0, 105.85542168674701], [86.0, 108.9125], [87.0, 111.56756756756761], [88.0, 118.89333333333333], [89.0, 115.54411764705884], [90.0, 118.30864197530863], [91.0, 119.87142857142858], [92.0, 116.92187499999999], [93.0, 125.49382716049384], [94.0, 120.38157894736842], [95.0, 117.69736842105263], [96.0, 114.08974358974359], [97.0, 122.25000000000003], [98.0, 126.40625], [99.0, 147.05128205128204], [100.0, 127.6356642641721]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[93.5607382181695, 120.64451279797896]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11755.333333333334, "minX": 1.79138718E12, "maxY": 1754482.6833333333, "series": [{"data": [[1.79138718E12, 92951.8], [1.79138724E12, 1754482.6833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79138718E12, 11755.333333333334], [1.79138724E12, 221888.33333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138724E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 38.52620087336239, "minX": 1.79138718E12, "maxY": 124.99502602660549, "series": [{"data": [[1.79138718E12, 38.52620087336239], [1.79138724E12, 124.99502602660549]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138724E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 38.33013100436681, "minX": 1.79138718E12, "maxY": 124.76992481202986, "series": [{"data": [[1.79138718E12, 38.33013100436681], [1.79138724E12, 124.76992481202986]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138724E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.003400809716599161, "minX": 1.79138718E12, "maxY": 0.04803493449781661, "series": [{"data": [[1.79138718E12, 0.04803493449781661], [1.79138724E12, 0.003400809716599161]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138724E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.79138718E12, "maxY": 282.0, "series": [{"data": [[1.79138718E12, 72.0], [1.79138724E12, 282.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79138718E12, 18.0], [1.79138724E12, 53.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79138718E12, 54.0], [1.79138724E12, 142.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79138718E12, 66.0], [1.79138724E12, 180.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79138718E12, 38.0], [1.79138724E12, 123.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79138718E12, 58.0], [1.79138724E12, 155.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138724E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 19.0, "minX": 17.0, "maxY": 148.0, "series": [{"data": [[566.0, 146.0], [604.0, 29.0], [634.0, 73.0], [636.0, 148.0], [666.0, 40.0], [641.0, 118.0], [664.0, 148.0], [677.0, 52.0], [683.0, 81.0], [682.0, 144.0], [702.0, 141.0], [700.0, 137.0], [697.0, 141.0], [693.0, 143.0], [723.0, 138.0], [713.0, 139.0], [750.0, 87.0], [756.0, 113.0], [749.0, 125.0], [738.0, 136.0], [751.0, 134.0], [765.0, 131.0], [794.0, 125.0], [793.0, 124.0], [792.0, 125.5], [799.0, 126.0], [790.0, 127.0], [775.0, 128.0], [798.0, 125.0], [783.0, 127.0], [824.0, 120.0], [807.0, 123.0], [828.0, 121.0], [825.0, 120.0], [826.0, 120.0], [813.0, 123.0], [820.0, 122.0], [823.0, 122.0], [819.0, 121.0], [818.0, 122.0], [810.0, 123.0], [811.0, 121.0], [817.0, 122.0], [804.0, 121.0], [803.0, 121.0], [806.0, 123.0], [847.0, 117.0], [835.0, 121.0], [838.0, 118.0], [837.0, 119.0], [848.0, 118.0], [840.0, 120.0], [17.0, 19.0], [326.0, 23.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 848.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 19.0, "minX": 17.0, "maxY": 148.0, "series": [{"data": [[566.0, 146.0], [604.0, 29.0], [634.0, 72.0], [636.0, 148.0], [666.0, 39.5], [641.0, 117.0], [664.0, 147.0], [677.0, 52.0], [683.0, 81.0], [682.0, 144.0], [702.0, 140.0], [700.0, 137.0], [697.0, 141.0], [693.0, 142.0], [723.0, 138.0], [713.0, 139.0], [750.0, 87.0], [756.0, 113.0], [749.0, 125.0], [738.0, 136.0], [751.0, 133.0], [765.0, 131.0], [794.0, 125.0], [793.0, 124.0], [792.0, 125.0], [799.0, 126.0], [790.0, 127.0], [775.0, 128.0], [798.0, 124.0], [783.0, 126.0], [824.0, 119.0], [807.0, 123.0], [828.0, 121.0], [825.0, 120.0], [826.0, 120.0], [813.0, 123.0], [820.0, 121.0], [823.0, 121.0], [819.0, 121.0], [818.0, 122.0], [810.0, 123.0], [811.0, 121.0], [817.0, 122.0], [804.0, 121.0], [803.0, 121.0], [806.0, 123.0], [847.0, 117.0], [835.0, 120.0], [838.0, 118.0], [837.0, 119.0], [848.0, 118.0], [840.0, 119.0], [17.0, 19.0], [326.0, 23.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 848.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 38.86666666666667, "minX": 1.79138718E12, "maxY": 719.7166666666667, "series": [{"data": [[1.79138718E12, 38.86666666666667], [1.79138724E12, 719.7166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138724E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 38.166666666666664, "minX": 1.79138718E12, "maxY": 720.4166666666666, "series": [{"data": [[1.79138718E12, 38.166666666666664], [1.79138724E12, 720.4166666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79138724E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 38.166666666666664, "minX": 1.79138718E12, "maxY": 720.4166666666666, "series": [{"data": [[1.79138718E12, 38.166666666666664], [1.79138724E12, 720.4166666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138724E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 38.166666666666664, "minX": 1.79138718E12, "maxY": 720.4166666666666, "series": [{"data": [[1.79138718E12, 38.166666666666664], [1.79138724E12, 720.4166666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79138724E12, "title": "Total Transactions Per Second"}},
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

