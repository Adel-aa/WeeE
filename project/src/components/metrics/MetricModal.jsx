import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const roleData = {
  manager: [
                  { name: 'Manager1', kpi: 95, activeAgents: 150, totalCalls: 1500, reportsTo: 'Technical', BelongTo: 'Technical' },
                { name: 'Manager2', kpi: 92, activeAgents: 120, totalCalls: 1200, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
                  { name: 'Manager3', kpi: 88, activeAgents: 135, totalCalls: 1350, reportsTo: 'Reapers',BelongTo: 'Reapers' },
              { name: 'Manager1', kpi: 95, activeAgents: 150, totalCalls: 1500, reportsTo: 'Technical',BelongTo: 'Technical' },
              { name: 'Manager2', kpi: 92, activeAgents: 120, totalCalls: 1200, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
              { name: 'Manager3', kpi: 88, activeAgents: 135, totalCalls: 1350, reportsTo: 'Reapers',BelongTo: 'Reapers' },
              { name: 'Manager1', kpi: 95, activeAgents: 150, totalCalls: 1500, reportsTo: 'Technical',BelongTo: 'Technical' },
                { name: 'Manager2', kpi: 92, activeAgents: 120, totalCalls: 1200, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
              { name: 'Manager3', kpi: 88, activeAgents: 135, totalCalls: 1350, reportsTo: 'Reapers',BelongTo: 'Reapers' },
                { name: 'Manager1', kpi: 95, activeAgents: 150, totalCalls: 1500, reportsTo: 'Technical',BelongTo: 'Technical' },
              { name: 'Manager2', kpi: 92, activeAgents: 120, totalCalls: 1200, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
                { name: 'Manager3', kpi: 88, activeAgents: 135, totalCalls: 1350, reportsTo: 'Reapers',BelongTo: 'Reapers' },
            { name: 'Manager1', kpi: 95, activeAgents: 150, totalCalls: 1500, reportsTo: 'Technical', BelongTo: 'Technical' },
              { name: 'Manager2', kpi: 92, activeAgents: 120, totalCalls: 1200, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
              { name: 'Manager3', kpi: 88, activeAgents: 135, totalCalls: 1350, reportsTo: 'Reapers',BelongTo: 'Reapers' },
              { name: 'Manager1', kpi: 95, activeAgents: 150, totalCalls: 1500, reportsTo: 'Technical',BelongTo: 'Technical' },
              { name: 'Manager2', kpi: 92, activeAgents: 120, totalCalls: 1200, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
              { name: 'Manager3', kpi: 88, activeAgents: 135, totalCalls: 1350, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
              { name: 'Manager1', kpi: 95, activeAgents: 150, totalCalls: 1500, reportsTo: 'Technical',BelongTo: 'Technical' },
              { name: 'Manager2', kpi: 92, activeAgents: 120, totalCalls: 1200, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
              { name: 'Manager3', kpi: 88, activeAgents: 135, totalCalls: 1350, reportsTo: 'Reapers',BelongTo: 'Reapers' },
                  { name: 'Manager1', kpi: 95, activeAgents: 150, totalCalls: 1500, reportsTo: 'Technical',BelongTo: 'Technical' },
              { name: 'Manager2', kpi: 92, activeAgents: 120, totalCalls: 1200, reportsTo: 'Sales',BelongTo: 'Non-Technical' },
       
  ],
  supervisor: [
            { name: 's1', kpi: 87, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
          { name: 's2', kpi: 72, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
            { name: 's3', kpi: 52, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
              { name: 's4', kpi: 98, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
            { name: 's5', kpi: 59, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
              { name: 's6', kpi: 82, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                { name: 's7', kpi: 78, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
              { name: 's8', kpi: 91, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                { name: 's9', kpi: 63, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                  { name: 's10', kpi: 91, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                { name: 's12', kpi: 80, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                  { name: 's13', kpi: 79, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                    { name: 's11', kpi: 74, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                  { name: 's14', kpi: 68, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                    { name: 's15', kpi: 75, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                      { name: 's30', kpi: 87, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                    { name: 's29', kpi: 72, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                      { name: 's28', kpi: 52, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                        { name: 's27', kpi: 98, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                      { name: 's26', kpi: 59, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                        { name: 's25', kpi: 82, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                          { name: 's24', kpi: 78, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                        { name: 's23', kpi: 91, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                          { name: 's22', kpi: 63, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                            { name: 's21', kpi: 91, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                          { name: 's20', kpi: 80, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                            { name: 's19', kpi: 79, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                              { name: 's18', kpi: 74, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                            { name: 's17', kpi: 68, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                              { name: 's16', kpi: 75, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                { name: '31', kpi: 87, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                              { name: 's32', kpi: 72, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                { name: 's33', kpi: 52, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                  { name: 's34', kpi: 98, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                { name: 's35', kpi: 59, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                  { name: 's36', kpi: 82, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                    { name: 's37', kpi: 78, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                  { name: 's38', kpi: 91, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                    { name: 's39', kpi: 63, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                      { name: 's140', kpi: 91, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                    { name: 's142', kpi: 80, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                      { name: 's143', kpi: 79, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                        { name: 's41', kpi: 74, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                      { name: 's44', kpi: 68, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                        { name: 's45', kpi: 75, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                          { name: 's50', kpi: 87, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                        { name: 's59', kpi: 72, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                          { name: 's28', kpi: 52, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                            { name: 's57', kpi: 98, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                          { name: 's56', kpi: 59, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                            { name: 's55', kpi: 82, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                              { name: 's54', kpi: 78, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                            { name: 's53', kpi: 91, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                              { name: 's52', kpi: 63, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                                { name: 's51', kpi: 91, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                              { name: 's50', kpi: 80, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                                { name: 's49', kpi: 79, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
                                                  { name: 's48', kpi: 74, activeAgents: 45, totalCalls: 450, reportsTo: 'Technical Manager' ,BelongTo: 'Manager1'},
                                                { name: 's47', kpi: 68, activeAgents: 40, totalCalls: 400, reportsTo: 'Sales Manager',BelongTo: 'Manager2' },
                                                  { name: 's46', kpi: 75, activeAgents: 42, totalCalls: 420, reportsTo: 'Reapers Manager',BelongTo: 'Manager3' },
  ],
  teamLeaders: {
    'Technical': [
        { name: 'tl1', kpi: 83, activeAgents: 15, totalCalls: 150, reportsTo: 'Technical Supervisor', lob: 's1' ,BelongTo: 's1'},
        { name: 'tl2', kpi: 85, activeAgents: 18, totalCalls: 160, reportsTo: 'Technical Supervisor', lob: 'Enterprise',BelongTo: 's1' },
        { name: 'tl1', kpi: 83, activeAgents: 15, totalCalls: 150, reportsTo: 'Technical Supervisor', lob: 's1' ,BelongTo: 's1'},
        { name: 'tl2', kpi: 85, activeAgents: 18, totalCalls: 160, reportsTo: 'Technical Supervisor', lob: 'Enterprise',BelongTo: 's1' },
        { name: 'tl1', kpi: 83, activeAgents: 15, totalCalls: 150, reportsTo: 'Technical Supervisor', lob: 's1' ,BelongTo: 's1'},
        { name: 'tl2', kpi: 85, activeAgents: 18, totalCalls: 160, reportsTo: 'Technical Supervisor', lob: 'Enterprise',BelongTo: 's1' },
        { name: 'tl1', kpi: 83, activeAgents: 15, totalCalls: 150, reportsTo: 'Technical Supervisor', lob: 's1' ,BelongTo: 's1'},
        { name: 'tl2', kpi: 85, activeAgents: 18, totalCalls: 160, reportsTo: 'Technical Supervisor', lob: 'Enterprise',BelongTo: 's1' },
        { name: 'tl1', kpi: 83, activeAgents: 15, totalCalls: 150, reportsTo: 'Technical Supervisor', lob: 's1' ,BelongTo: 's1'},
        { name: 'tl2', kpi: 85, activeAgents: 18, totalCalls: 160, reportsTo: 'Technical Supervisor', lob: 'Enterprise',BelongTo: 's1' },
        { name: 'tl1', kpi: 83, activeAgents: 15, totalCalls: 150, reportsTo: 'Technical Supervisor', lob: 's1' ,BelongTo: 's1'},
        { name: 'tl2', kpi: 85, activeAgents: 18, totalCalls: 160, reportsTo: 'Technical Supervisor', lob: 'Enterprise',BelongTo: 's1' },
        { name: 'tl1', kpi: 83, activeAgents: 15, totalCalls: 150, reportsTo: 'Technical Supervisor', lob: 's1' ,BelongTo: 's1'},
        { name: 'tl2', kpi: 85, activeAgents: 18, totalCalls: 160, reportsTo: 'Technical Supervisor', lob: 'Enterprise',BelongTo: 's1' },
        { name: 'tl1', kpi: 83, activeAgents: 15, totalCalls: 150, reportsTo: 'Technical Supervisor', lob: 's1' ,BelongTo: 's1'},
        { name: 'tl2', kpi: 85, activeAgents: 18, totalCalls: 160, reportsTo: 'Technical Supervisor', lob: 'Enterprise',BelongTo: 's1' },
        
      ],
    'Sales': [
        { name: 't3', kpi: 86, activeAgents: 12, totalCalls: 120, reportsTo: 'Non-Technical Supervisor', lob: 'Consumer' ,BelongTo: 's2'},
        { name: 'tl4', kpi: 84, activeAgents: 14, totalCalls: 130, reportsTo: 'Non-Technical Supervisor', lob: 'Enterprise' ,BelongTo: 's2'},
    ],
    'Reapers': [
          { name: 't5', kpi: 84, activeAgents: 14, totalCalls: 140, reportsTo: 'Reapers Supervisor', lob: 'Consumer' ,BelongTo: 's3' },
        { name: 'tl6', kpi: 82, activeAgents: 16, totalCalls: 145, reportsTo: 'Reapers Supervisor', lob: 'Enterprise',BelongTo: 's3' },
    ]
  },
  agents: [
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
              { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Technical Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
            { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Support Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
              { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Technical Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
                { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
              { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Technical Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
            { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Support Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
              { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Technical Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
              { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Technical Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
            { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Support Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
            { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Support Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
            { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Support Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
              { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Technical Team Leader', BelongTo: 'tl8' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl9' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl10' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 'tl2' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 'tl3' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 'tl3' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 'tl4' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 'tl5' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl6' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 'tl7' },
              { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Technical Team Leader', BelongTo: 'tl8' },
              { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 't42' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl11' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader',BelongTo: 't41' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader',BelongTo: 't28' },
            { name: 'mostfa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader',BelongTo: 't32' },
            { name: 'ahmed', kpi: 82, calls: 150, quality: 95, reportsTo: 'Technical Team Leader', BelongTo: 'tl1' },
            { name: 'mahmoud', kpi: 79, calls: 145, quality: 92, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl2' },
            { name: 'mostafa', kpi: 81, calls: 155, quality: 88, reportsTo: 'Reapers Team Leader', BelongTo: 't23' },
              { name: 'hossam', kpi: 80, calls: 160, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 't24' },
            { name: 'mohamed', kpi: 83, calls: 165, quality: 87, reportsTo: 'Technical Team Leader', BelongTo: 't25' },
            { name: 'tarek', kpi: 85, calls: 170, quality: 93, reportsTo: 'Non-Technical Team Leader', BelongTo: 't37' },
            { name: 'youssef', kpi: 78, calls: 140, quality: 89, reportsTo: 'Reapers Team Leader', BelongTo: 't36' },
              { name: 'amr', kpi: 80, calls: 152, quality: 94, reportsTo: 'Technical Team Leader', BelongTo: 't35' },
            { name: 'omar', kpi: 84, calls: 159, quality: 90, reportsTo: 'Technical Team Leader', BelongTo: 't25' },
            { name: 'khaled', kpi: 81, calls: 160, quality: 88, reportsTo: 'Non-Technical Team Leader', BelongTo: 'tl17' },
  ],
          


   overallPerformance: [
    { name: 'Technical', kpi: 92, activeAgents: 85, totalCalls: 850, reportsTo: 'Overall', BelongTo: 'Overall' },
    { name: 'Sales', kpi: 88, activeAgents: 80, totalCalls: 800, reportsTo: 'Overall', BelongTo: 'Overall' },
    { name: 'FTTH', kpi: 82, activeAgents: 85, totalCalls: 850, reportsTo: 'Overall', BelongTo: 'Overall' },
    { name: 'Reapers', kpi: 85, activeAgents: 80, totalCalls: 800, reportsTo: 'Overall', BelongTo: 'Overall' },
    { name: 'VIP', kpi: 77, activeAgents: 85, totalCalls: 850, reportsTo: 'Overall', BelongTo: 'Overall' },
    { name: 'FO', kpi: 65, activeAgents: 80, totalCalls: 800, reportsTo: 'Overall', BelongTo: 'Overall' },
    // ... other metrics
  ],
  activeAgents: [
    { category: 'Technical', value: 3000 },
    { category: 'Sales', value: 2600 },
    { category: 'FTTH', value: 520 },
    { category: 'Reapers', value: 75 },
    { category: 'VIP', value: 62 },
    { category: 'FO', value: 25 }
  ]
};

export default function MetricModal({ isOpen, onClose, title, value, timeframe, trend, reportsTo, BelongTo }) {
  const getRelatedData = () => {
    if (title === 'Overall Performance') {
      return roleData.overallPerformance;
    }

    if (title === 'Active Agents') {
      return roleData.activeAgents;
    }

    // For Manager: Get all supervisors that belong to this manager
    if (title.startsWith('Manager')) {
      return roleData.supervisor.filter(sup => sup.BelongTo === title);
    }

    // For Supervisor: Get all team leaders that belong to this supervisor
    if (title.startsWith('s')) {
      return Object.values(roleData.teamLeaders)
        .flat()
        .filter(tl => tl.BelongTo === title);
    }

    // For Team Leader: Get all agents that belong to this team leader
    if (title.startsWith('t')) {
      return roleData.agents.filter(agent => agent.BelongTo === title);
    }

    return [];
  };

  const relatedData = getRelatedData();

  const chartData = {
    labels: relatedData.map(item => item.category || item.name),
    datasets: [
      {
        label: title === 'Active Agents' ? 'Active Agents' : 'KPI Performance',
        data: relatedData.map(item => item.kpi || item.value),
        backgroundColor: 'rgba(136, 96, 208, 0.7)',
        borderColor: 'rgb(136, 96, 208)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Performance Metrics for ${title}`,
        font: {
          size: 16,
          weight: 'bold'
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: title === 'Active Agents' ? 4000 : 100,
        title: {
          display: true,
          text: title === 'Active Agents' ? 'Active Agent' : 'KPI Value (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Categories'
        }
      }
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          style={{ fontFamily: 'Cambria' }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            style={{ width: '90vw', height: '100vh' }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 h-[calc(90vh-100px)] overflow-y-auto">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <p className="text-sm text-gray-500 mb-1">Current Performance</p>
                  <p className="text-2xl font-bold" style={{ color: 'rgb(168, 85, 247) !important' }}>{value}%</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <p className="text-sm text-gray-500 mb-1">Team Members</p>
                  <p className="text-2xl font-bold text-purple-600">{relatedData.length}</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <p className="text-sm text-gray-500 mb-1">Average Team KPI</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {relatedData.length > 0
                      ? (relatedData.reduce((acc, curr) => acc + (curr.kpi || curr.value), 0) / relatedData.length).toFixed(1)
                      : 'N/A'}%
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white p-4 rounded-xl border border-gray-100">
                <div className="h-[320px]">
                  <Bar options={options} data={chartData} />
                </div>
              </div>

              {/* Team Members Table */}
              <div className="bg-white p-4 rounded-xl border border-gray-100">
                <h4 className="text-lg font-semibold mb-4">Team Members Details</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {relatedData.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.category || item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.value || item.kpi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}