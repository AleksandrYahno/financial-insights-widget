export interface IFactorGradesCardRow {
  factorKey: string;
  now: string;
  threeM: string;
  sixM: string;
}

export interface IFactorGradesCardProps {
  rows: IFactorGradesCardRow[];
}
