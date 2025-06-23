import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectItem } from '@/components/ui/select';

const projects = [
  {
    id: 1,
    name: 'BlockStarter DAO',
    chain: 'Ethereum',
    status: 'Funding',
    startDate: '2025-07-01',
    endDate: '2025-08-01',
  },
  {
    id: 2,
    name: 'DeFiShield',
    chain: 'BSC',
    status: 'Completed',
    startDate: '2025-05-15',
    endDate: '2025-06-15',
  },
];

export default function LandingPage() {
  const [selectedChain, setSelectedChain] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchChain = selectedChain === 'All' || project.chain === selectedChain;
    const matchSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchChain && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">CryptoDropX</h1>
        <Button variant="secondary">Connect Wallet</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select onValueChange={setSelectedChain} defaultValue="All">
          <SelectItem value="All">All Chains</SelectItem>
          <SelectItem value="Ethereum">Ethereum</SelectItem>
          <SelectItem value="BSC">BSC</SelectItem>
        </Select>
        <Button>Add New Project</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-gray-800 border border-gray-700">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-sm text-gray-400">Chain: {project.chain}</p>
              <p className="text-sm text-gray-400">Status: {project.status}</p>
              <p className="text-sm text-gray-400">
                {project.startDate} → {project.endDate}
              </p>
              <Button variant="outline" className="mt-4">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
