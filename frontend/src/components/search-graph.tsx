import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Point } from '../types';


export function SearchGraph({points,searchTermPoint} :{points:Point[],searchTermPoint?:Point}){


    
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart title='Visualization of search results'
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          
          <XAxis type="number" dataKey="x" name="x" unit="" />
          <YAxis type="number" dataKey="y" name="y" unit="" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Visualization of search results" data={points} fill="#8884d8" />
          <Scatter name="Visualization of search results" data={[searchTermPoint]} fill="#CC0011" />

        </ScatterChart>
      </ResponsiveContainer>;



}