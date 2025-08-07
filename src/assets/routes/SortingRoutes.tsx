import Sorting from "../../pages/sorting/Sorting"
import Bubble from "../../pages/sorting/Bubble"
import Selection from "../../pages/sorting/Selection"
import Insertion from "../../pages/sorting/Insertion"
import Merge from "../../pages/sorting/Merge"
import Quick from "../../pages/sorting/Quick"
import Heap from "../../pages/sorting/Heap"
import Cycle from "../../pages/sorting/Cycle"
import ThreeWayMerge from "../../pages/sorting/ThreeWayMerge"

export const SortingRoutes = {
        path: 'sorting',
        element: <Sorting/>,
        children: [
            {path: 'selection-sort', element: <Selection/>},
            {path: 'bubble-sort', element: <Bubble/>},
            {path: 'insertion-sort', element: <Insertion/>},
            {path: 'merge-sort', element: <Merge/>},
            {path: 'heap-sort', element: <Heap/>},
            {path: 'cycle-sort', element: <Cycle/>},
            {path: '3-way-merge-sort', element: <ThreeWayMerge/>},
            {path: 'quick-sort', element: <Quick/>},
        ]
    }
