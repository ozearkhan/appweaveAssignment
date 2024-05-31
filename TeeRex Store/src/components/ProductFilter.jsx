import React, { useState } from 'react';
import { Card, Select, Accordion } from 'flowbite-react';
import Slider from 'react-slider';

const ProductFilter = ({ filters, setFilters }) => {
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
        setFilters({ ...filters, priceRange: value });
    };

    return (
        <Card className="p-4">
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>Filters</Accordion.Title>
                    <Accordion.Content>
                        <div className="mb-4 flex flex-col p-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                            <Select name="gender" onChange={handleChange}>
                                <option value="">All</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                            </Select>
                            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Color</label>
                            <Select name="color" onChange={handleChange}>
                                <option value="">All</option>
                                <option value="Black">Black</option>
                                <option value="Blue">Blue</option>
                                <option value="Green">Green</option>
                                <option value="Pink">Pink</option>
                            </Select>
                            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Type</label>
                            <Select name="type" onChange={handleChange}>
                                <option value="">All</option>
                                <option value="Polo">Polo</option>
                                <option value="Round">Round</option>
                                <option value="Hoodie">Hoodie</option>
                            </Select>
                            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Price Range</label>
                            <Slider
                                min={0}
                                max={1000}
                                step={50}
                                value={priceRange}
                                onChange={handlePriceChange}
                                className="w-full"
                                renderTrack={(props, state) => {
                                    const trackClasses = [
                                        'bg-gray-600',
                                        'bg-blue-500',
                                        'bg-gray-600'
                                    ];
                                    const trackColors = trackClasses[state.index] || 'bg-gray-600';
                                    return (
                                        <div
                                            {...props}
                                            className={`h-2 ${trackColors} mx-2 rounded`}
                                        />
                                    );
                                }}
                                renderThumb={(props) => (
                                    <div
                                        {...props}
                                        className="h-5 w-5 bg-blue-500 rounded-full -mt-1.5"
                                    />
                                )}
                            />
                            <div className="flex justify-between text-gray-600 mt-2">
                                <span>₹{priceRange[0]}</span>
                                <span>₹{priceRange[1]}</span>
                            </div>
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </Card>
    );
};

export default ProductFilter;
