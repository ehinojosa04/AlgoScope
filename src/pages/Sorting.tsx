import AlgorithmCard from "../components/AlgorithmCard"

export default function Sorting(){
    const algorithms = [
        { name: 'Selection Sort', description: 'Swap the smallest number with the left-most unsorted item.', path: '' },
        { name: 'Bubble Sort', description: 'Swap elements next to each other if they are in the wrong order.', path: '/sorting/bubble-sort'},
        { name: 'Insertion Sort', description: 'Iteratively insert unsorted elements into a sorted portion of the list.', path: '' },
        { name: 'Merge Sort', description: 'Recursively divide the input array in two halves, sort them and merge them back.', path: '' },
        { name: 'Quick Sort', description: 'Recursively divide into two subarrays that are lower and larger than a pivot of choice.', path: '' },
        { name: 'Heap Sort', description: 'Convert array into a max heap and pop into an array while size is larger than 1.', path: '' },
        { name: 'Cycle Sort', description: 'Divide the array into cycles, rotate to find the correct position of each element.', path: '' },
        { name: '3-way Merge Sort', description: 'Variation of Merge sort, arrays are divided into three parts to limit recursion.', path: '' }
    ]

    return(
        <>
            <div className="pt-4">
                <h1 className="text-4xl pb-10">Sorting Algorithms</h1>
                <div className="flex flex-wrap py-6 justify-center items-center gap-x-8 gap-y-4">
                    {algorithms.map((algorithm) => (
                        <AlgorithmCard key={algorithm.name} name={algorithm.name} description={algorithm.description} path={algorithm.path}/>
                    ))}
                </div>
            </div>
        </>
    )
}