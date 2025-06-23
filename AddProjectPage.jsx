import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectItem } from '@/components/ui/select';

export default function AddProjectPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    chain: 'Ethereum',
    fundingGoal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted project:', formData);
    alert('Project submitted! (Simulated)');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <Select onValueChange={(value) => setFormData({ ...formData, chain: value })} defaultValue="Ethereum">
          <SelectItem value="Ethereum">Ethereum</SelectItem>
          <SelectItem value="BSC">Binance Smart Chain</SelectItem>
          <SelectItem value="Polygon">Polygon</SelectItem>
        </Select>
        <Input
          name="fundingGoal"
          placeholder="Funding Goal (in ETH)"
          value={formData.fundingGoal}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit Project</Button>
      </form>
    </div>
  );
}
