import React from 'react';
import { Bell, Search, Clock, Users, Target, PhoneCall, Crown, Layers, UserRoundSearch, HomeIcon } from 'lucide-react';
import MetricCard from '../metrics/MetricCard';
import { motion, AnimatePresence } from 'framer-motion';

const mainMetrics = [
  {
    title: "Overall Performance",
    value: 92,
      icon: Target,
    timeframe: "This Month",
    trend: { value: 5, isPositive: true }
  },
      {
    title: "Active Agents",
    value: 85,
    icon: Users,
    timeframe: "Right Now",
    trend: { value: 3, isPositive: true }
  },
  {
    title: "Average Handle Time",
    value: 88,
    icon: Clock,
    timeframe: "Today",
    trend: { value: 2, isPositive: false }
  }
];

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
          
};
  


export default function Body({ activeRole, selectedDepartment, darkMode }) {
  const data = activeRole ? roleData[activeRole] : null;
  const filteredData = selectedDepartment
    ? (activeRole === 'teamLeaders'
      ? roleData.teamLeaders[selectedDepartment] || []
      : data?.filter(item => item.reportsTo.includes(selectedDepartment)))
    : (activeRole === 'teamLeaders'
      ? Object.values(roleData.teamLeaders).flat()
      : data);

  const getMetricProps = (item) => {
    const baseProps = {
      title: item.name || item.title,
      value: item.kpi || item.value,
      trend: item.trend || { value: Math.floor(Math.random() * 10), isPositive: Math.random() > 0.5 }
    };

    if (!activeRole) return { ...baseProps, icon: item.icon, timeframe: item.timeframe };

    switch (activeRole) {
      case 'Main':
        return {
          ...baseProps,
          icon: HomeIcon,
          timeframe: `${item.activeAgents} active agents`,
          BelongTo: item.BelongTo
        };
        case 'manager':
          return {
            ...baseProps,
            icon: Crown,
            timeframe: `${item.activeAgents} active agents`,
            BelongTo: item.BelongTo
          };
      case 'supervisor':
        return {
          ...baseProps,
          icon: Layers,
          timeframe: `${item.activeAgents} team members`,
          BelongTo: item.BelongTo
        };
      case 'teamLeaders':
        return {
          ...baseProps,
          icon: Users,
          timeframe: `${item.activeAgents} agents`,
          BelongTo: item.BelongTo
        };
      case 'agents':
        return {
          ...baseProps,
          icon: UserRoundSearch,
          timeframe: `${item.calls} calls today`,
          BelongTo: item.BelongTo
        };
      default:
        return baseProps;
    }
  };

  const displayData = activeRole ? filteredData : mainMetrics;

  return (
    <div className={`h-[calc(100vh-4rem)] pt-8 overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-[#f4f4f4]'
    } transition-colors duration-300`}>
      <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-col">
        <motion.div 
          className={`sticky top-0 z-10 py-2 mb-4 flex justify-center ${
            darkMode ? 'bg-gray-900' : 'bg-[#f4f4f4]'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className={`inline-block px-6 py-3 rounded-xl shadow-lg ${
              darkMode 
                ? 'bg-gradient-to-r from-[#8860D0]/20 to-[#6b4da6]/20 border border-gray-700' 
                : 'bg-gradient-to-r from-[#8860D0] to-[#6b4da6]'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h2 
              className={`text-2xl font-semibold ${
                darkMode ? 'text-white' : 'text-white'
              }`}
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '0.5px',
                textShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.2)' : 'none'
              }}
            >
              {activeRole
                ? `${activeRole.charAt(0).toUpperCase() + activeRole.slice(1)} Dashboard${selectedDepartment ? ` - ${selectedDepartment}` : ''}`
                : 'Main Dashboard'}
            </h2>
          </motion.div>
        </motion.div>

        <div className="flex-1 overflow-y-auto pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
            <AnimatePresence>
              {displayData && displayData.map((item, index) => (
                <motion.div
                  key={index}
                  className="h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MetricCard {...getMetricProps(item)} darkMode={darkMode} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}