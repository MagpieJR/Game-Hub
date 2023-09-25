import useData from '../services/useData'

export interface parent_platform{
    id: number,
    name: string,

}

const usePlatforms = () => useData<parent_platform>('/platforms/lists/parents');

export default usePlatforms;